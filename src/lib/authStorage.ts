const ACCESS_TOKEN_KEY = 'medicare_token';
const REFRESH_TOKEN_KEY = 'medicare_refresh_token';
const USER_KEY = 'medicare_user';

export type StoredUser = {
  id?: string;
  _id?: string;
  name?: string;
  phone?: string;
  email?: string;
  role?: 'patient' | 'doctor' | 'admin' | string;
  doctorProfile?: string;
  age?: number;
};

const safeGet = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const safeSet = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // ignore
  }
};

const safeRemove = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch {
    // ignore
  }
};

export const authStorage = {
  getAccessToken(): string | null {
    return safeGet(ACCESS_TOKEN_KEY);
  },
  setAccessToken(token: string | null): void {
    if (!token) return safeRemove(ACCESS_TOKEN_KEY);
    safeSet(ACCESS_TOKEN_KEY, token);
  },
  getRefreshToken(): string | null {
    return safeGet(REFRESH_TOKEN_KEY);
  },
  setRefreshToken(token: string | null): void {
    if (!token) return safeRemove(REFRESH_TOKEN_KEY);
    safeSet(REFRESH_TOKEN_KEY, token);
  },
  getUser(): StoredUser | null {
    const raw = safeGet(USER_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as StoredUser;
    } catch {
      return null;
    }
  },
  setUser(user: StoredUser | null): void {
    if (!user) return safeRemove(USER_KEY);
    safeSet(USER_KEY, JSON.stringify(user));
  },
  clear(): void {
    safeRemove(ACCESS_TOKEN_KEY);
    safeRemove(REFRESH_TOKEN_KEY);
    safeRemove(USER_KEY);
  },
};
