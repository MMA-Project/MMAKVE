import { createContext, useContext, useState, useCallback } from 'react'
import type { ReactNode } from 'react'

interface User {
  username: string
}

interface AuthContextValue {
  user: User | null
  login: (username: string) => Promise<void>
  register: (username: string) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)

  const fakeDelay = (ms: number) => new Promise(res => setTimeout(res, ms))

  const login = useCallback(async (username: string) => {
    setLoading(true)
    await fakeDelay(400)
    setUser({ username })
    setLoading(false)
  }, [])

  const register = useCallback(async (username: string) => {
    setLoading(true)
    await fakeDelay(600)
    setUser({ username })
    setLoading(false)
  }, [])

  const logout = useCallback(() => {
    setUser(null)
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

// Simple ProtectedRoute wrapper (can be replaced by route-level guard patterns)
import { Navigate } from 'react-router-dom'
export function Protected({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  return <>{children}</>
}
