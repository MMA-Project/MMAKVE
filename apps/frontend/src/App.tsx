import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login/Login";

function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
            <p className="text-sm text-slate-400 max-w-md text-center">
                Contenu protégé. Débranche ce placeholder quand tu ajouteras tes vraies données.
            </p>
            <a
                href="/login"
                className="text-indigo-400 hover:text-indigo-300 text-sm underline underline-offset-4"
            >
                Retour login
            </a>
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}
