const API_BASE = (import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '')

export interface LoginCredentials {
  username: string
  password: string
}

export interface RegisterCredentials extends LoginCredentials {}

export interface AuthResponse {
  user: {
    id: string
    username: string
    role: string
  }
  token: string
}

export async function loginApi(credentials: LoginCredentials): Promise<AuthResponse> {
  const resp = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  })

  if (!resp.ok) {
    const body = await resp.json().catch(() => null)
    const msg = body?.error?.message ?? body?.message ?? 'Identifiants invalides'
    throw new Error(msg)
  }

  return resp.json()
}

export async function registerApi(credentials: RegisterCredentials): Promise<AuthResponse> {
  const resp = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  })

  if (!resp.ok) {
    const body = await resp.json().catch(() => null)
    const msg = body?.error?.message ?? body?.message ?? 'Erreur inscription'
    throw new Error(msg)
  }

  return resp.json()
}