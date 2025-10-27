import { createContext, useContext, useState, useCallback } from 'react'
import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { loginApi, registerApi } from '../api/AuthApi'

interface User {
  id: string
  username: string
  role: string
}

interface AuthContextValue {
  user: User | null
  login: (username: string, password: string) => Promise<void>
  register: (username: string, password: string) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Restaurer l'utilisateur depuis localStorage au démarrage
    try {
      const stored = localStorage.getItem('auth')
      if (stored) {
        const data = JSON.parse(stored)
        return data.user ?? null
      }
    } catch {
      // ignore
    }
    return null
  })
  const [loading, setLoading] = useState(false)

  const login = useCallback(async (username: string, password: string) => {
    setLoading(true)
    try {
      const data = await loginApi({ username, password })
      setUser(data.user)
      localStorage.setItem('auth', JSON.stringify(data))
    } finally {
      setLoading(false)
    }
  }, [])

  const register = useCallback(async (username: string, password: string) => {
    setLoading(true)
    try {
      const data = await registerApi({ username, password })
      setUser(data.user)
      localStorage.setItem('auth', JSON.stringify(data))
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    localStorage.removeItem('auth')
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export function Protected({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  return <>{children}</>
}