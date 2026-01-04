import { requestJson } from './api';
import { authStorage, type StoredUser } from './authStorage';

export type AuthRole = 'patient' | 'doctor' | 'admin';

export type AuthUser = {
  id?: string;
  _id?: string;
  name: string;
  phone: string;
  email?: string;
  role: AuthRole;
  doctorProfile?: string;
  age?: number;
};

export type LoginResponse = {
  message?: string;
  user: AuthUser;
  token: string;
  refreshToken: string;
};

export type RegisterPayload = {
  name: string;
  phone: string;
  email?: string;
  password: string;
  role?: 'patient' | 'doctor';
  age?: number;
  doctorSpecialty?: string;
  doctorSpecialtySlug?: string;
  licenseNumber?: string;
  avatarUrl?: string;
  location?: string;
  locationLat?: number;
  locationLng?: number;
  certification?: string;
  cv?: string;
  secretaryPhone?: string;
  consultationFee?: number;
};

export type RegisterResponse =
  | {
      message?: string;
      user: StoredUser;
      token: string;
      refreshToken: string;
    }
  | {
      message?: string;
      user: StoredUser;
    };

export type RefreshResponse = {
  token: string;
  refreshToken: string;
};

export const authApi = {
  async login(phone: string, password: string): Promise<LoginResponse> {
    return requestJson<LoginResponse>({
      method: 'POST',
      path: '/api/auth/login',
      body: { phone, password },
    });
  },

  async register(payload: RegisterPayload): Promise<RegisterResponse> {
    return requestJson<RegisterResponse>({
      method: 'POST',
      path: '/api/auth/register',
      body: payload,
    });
  },

  async refresh(refreshToken: string): Promise<RefreshResponse> {
    return requestJson<RefreshResponse>({
      method: 'POST',
      path: '/api/auth/refresh',
      body: { refreshToken },
    });
  },

  async me(token: string): Promise<{ user: StoredUser }> {
    return requestJson<{ user: StoredUser }>({
      method: 'GET',
      path: '/api/auth/me',
      token,
    });
  },

  async ensureFreshAccessToken(): Promise<string | null> {
    const token = authStorage.getAccessToken();
    if (token) return token;

    const refreshToken = authStorage.getRefreshToken();
    if (!refreshToken) return null;

    const refreshed = await authApi.refresh(refreshToken);
    authStorage.setAccessToken(refreshed.token);
    authStorage.setRefreshToken(refreshed.refreshToken);
    return refreshed.token;
  },
};
