import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import { Dashboard } from "./components/Quest/QuestDashboard";
import { Protected, useAuth } from "./context/AuthContext";


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

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl text-slate-400">Page non trouvée</p>
      <a href="/" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition">
        Retour à l'accueil
      </a>
    </div>
  )
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}