export type JsonValue = null | boolean | number | string | JsonValue[] | { [key: string]: JsonValue };

export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

const getApiBaseUrl = (): string => {
  const fromEnv = (import.meta as any)?.env?.VITE_API_BASE_URL;
  if (typeof fromEnv === 'string' && fromEnv.trim()) return fromEnv.trim().replace(/\/$/, '');
  return 'https://api.medicare-iq.com';
};

const readBodySafe = async (res: Response): Promise<unknown> => {
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    try {
      return await res.json();
    } catch {
      return null;
    }
  }

  try {
    return await res.text();
  } catch {
    return null;
  }
};

export type RequestJsonOptions = {
  method?: string;
  path: string;
  headers?: Record<string, string>;
  body?: unknown;
  token?: string | null;
};

export const requestJson = async <T>(opts: RequestJsonOptions): Promise<T> => {
  const url = `${getApiBaseUrl()}${opts.path.startsWith('/') ? '' : '/'}${opts.path}`;

  const headers: Record<string, string> = {
    Accept: 'application/json',
    'x-client': 'web',
    ...(opts.headers || {}),
  };
  if (opts.body !== undefined) headers['Content-Type'] = 'application/json';
  if (opts.token) headers.Authorization = `Bearer ${opts.token}`;

  const res = await fetch(url, {
    method: opts.method || 'GET',
    headers,
    body: opts.body === undefined ? undefined : JSON.stringify(opts.body),
  });

  if (!res.ok) {
    const data = await readBodySafe(res);
    const message =
      (data as any)?.message ||
      (typeof data === 'string' && data.trim()) ||
      `Request failed (${res.status})`;
    throw new ApiError(String(message), res.status, data);
  }

  const data = await readBodySafe(res);
  return data as T;
};
