import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login/Login'
import { Protected, useAuth } from './context/AuthContext'

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
      <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
      <p className="text-sm text-slate-400 max-w-md text-center">Contenu protégé. Débranche ce placeholder quand tu ajouteras tes vraies données.</p>
      <a href="/logout" className="text-indigo-400 hover:text-indigo-300 text-sm underline underline-offset-4">Logout</a>
    </div>
  )
}

function LoginRoute() {
  const { user } = useAuth()
  if (user) return <Navigate to="/dashboard" replace />
  return <Login />
}

function LogoutRoute() {
  const { logout } = useAuth()
  logout()
  return <Navigate to="/" replace />
}

export default function App() {
  return (
    <Routes>
      <Route path="/logout" element={<LogoutRoute />} />
      <Route path="/dashboard" element={
        <Protected>
          <Dashboard />
        </Protected>
      } />
      <Route path="/" element={<LoginRoute />} />
    </Routes>
  )
}
