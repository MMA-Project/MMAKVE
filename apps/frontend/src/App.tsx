import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login/Login";
import { Dashboard } from "./components/Quest/QuestDashboard";
import { Protected, useAuth } from "./auth/AuthContext";


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