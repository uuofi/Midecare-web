import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { ApiError } from './api';
import { authApi, type RegisterPayload, type AuthRole } from './authApi';
import { authStorage, type StoredUser } from './authStorage';

type AuthStatus = 'loading' | 'anonymous' | 'authenticated';

type AuthContextValue = {
  status: AuthStatus;
  user: StoredUser | null;
  accessToken: string | null;
  login: (args: { phone: string; password: string }) => Promise<void>;
  signup: (payload: RegisterPayload) => Promise<{ needsApproval?: boolean; message?: string }>;
  logout: () => void;
  refreshSession: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

const normalizeIraqPhoneTo10Digits = (value: string): string => {
  let digits = String(value || '').replace(/\D/g, '');
  // If pasted as +964XXXXXXXXXX
  if (digits.startsWith('964') && digits.length === 13) {
    digits = digits.slice(3);
  }
  // If pasted as 07XXXXXXXXX
  if (digits.startsWith('0') && digits.length === 11) {
    digits = digits.slice(1);
  }
  return digits.slice(0, 10);
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>('loading');
  const [user, setUser] = useState<StoredUser | null>(() => authStorage.getUser());
  const [accessToken, setAccessToken] = useState<string | null>(() => authStorage.getAccessToken());
  const refreshInFlight = useRef<Promise<void> | null>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const writeSession = useCallback((next: { user: StoredUser | null; token: string | null; refreshToken?: string | null }) => {
    authStorage.setUser(next.user);
    authStorage.setAccessToken(next.token);
    if (typeof next.refreshToken !== 'undefined') authStorage.setRefreshToken(next.refreshToken);

    setUser(next.user);
    setAccessToken(next.token);
  }, []);

  const logout = useCallback(() => {
    authStorage.clear();
    setUser(null);
    setAccessToken(null);
    setStatus('anonymous');
  }, []);

  const refreshSession = useCallback(async () => {
    if (refreshInFlight.current) return refreshInFlight.current;

    refreshInFlight.current = (async () => {
      const token = authStorage.getAccessToken();
      const refreshToken = authStorage.getRefreshToken();
      if (!token && !refreshToken) {
        if (mounted.current) setStatus('anonymous');
        return;
      }

      try {
        // 1) Try existing access token
        if (token) {
          const me = await authApi.me(token);
          if (!mounted.current) return;
          writeSession({ user: me.user, token, refreshToken: refreshToken || null });
          setStatus('authenticated');
          return;
        }

        // 2) Otherwise refresh and fetch me
        if (!refreshToken) throw new ApiError('No refresh token', 401);
        const refreshed = await authApi.refresh(refreshToken);
        const me = await authApi.me(refreshed.token);
        if (!mounted.current) return;
        writeSession({ user: me.user, token: refreshed.token, refreshToken: refreshed.refreshToken });
        setStatus('authenticated');
      } catch (err) {
        // If access token invalid: try refresh once
        const maybeApi = err as any;
        const currentRefresh = authStorage.getRefreshToken();

        if (maybeApi?.status === 401 && currentRefresh) {
          try {
            const refreshed = await authApi.refresh(currentRefresh);
            const me = await authApi.me(refreshed.token);
            if (!mounted.current) return;
            writeSession({ user: me.user, token: refreshed.token, refreshToken: refreshed.refreshToken });
            setStatus('authenticated');
            return;
          } catch {
            // fallthrough
          }
        }

        if (!mounted.current) return;
        logout();
      }
    })().finally(() => {
      refreshInFlight.current = null;
    });

    return refreshInFlight.current;
  }, [logout, writeSession]);

  useEffect(() => {
    refreshSession().catch(() => {
      // ignore
    });
  }, [refreshSession]);

  const login = useCallback(async (args: { phone: string; password: string }) => {
    const phone = normalizeIraqPhoneTo10Digits(args.phone);
    const password = String(args.password || '');
    const res = await authApi.login(phone, password);
    writeSession({ user: res.user, token: res.token, refreshToken: res.refreshToken });
    setStatus('authenticated');
  }, [writeSession]);

  const signup = useCallback(async (payload: RegisterPayload) => {
    const role = (payload.role || 'patient') as AuthRole;
    const res = await authApi.register({
      ...payload,
      phone: normalizeIraqPhoneTo10Digits(payload.phone),
      secretaryPhone: payload.secretaryPhone ? normalizeIraqPhoneTo10Digits(payload.secretaryPhone) : payload.secretaryPhone,
      role: role === 'admin' ? 'patient' : (role as any),
    });

    // Doctor accounts can be created as pending (no token).
    if ('token' in res && res.token) {
      writeSession({ user: res.user, token: res.token, refreshToken: (res as any).refreshToken });
      setStatus('authenticated');
      return { needsApproval: false, message: res.message };
    }

    return { needsApproval: true, message: res.message };
  }, [writeSession]);

  const value = useMemo<AuthContextValue>(() => {
    return {
      status,
      user,
      accessToken,
      login,
      signup,
      logout,
      refreshSession,
    };
  }, [accessToken, login, logout, refreshSession, signup, status, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within <AuthProvider>.');
  return ctx;
};
