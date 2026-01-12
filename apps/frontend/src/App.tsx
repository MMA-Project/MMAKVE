import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import { Protected, useAuth } from "./context/AuthContext";
import { QuestDashboard } from "./components/Quest/QuestDashboard";
import QuestPage from "./components/Quest/QuestPage";
import { AdventurerDashboard } from "./components/Adventurer/AdventurerDashboard";
import { AdventurerDetails } from "./components/Adventurer/AdventurerDetails";
import { GuildDashboard } from "./components/Guild/GuildDashboard";
import { Navbar } from "./components/Nav/Navbar";

function LoginRoute() {
    const { user } = useAuth();
    if (user) return <Navigate to="/dashboard" replace />;
    return <Login />;
}

function LogoutRoute() {
    const { logout } = useAuth();
    logout();
    return <Navigate to="/" replace />;
}

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 p-8">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-xl text-slate-400">Page non trouvée</p>
            <a
                href="/"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition"
            >
                Retour à l'accueil
            </a>
        </div>
    );
}

function Dashboard() {
    const { user } = useAuth();
    if (user?.role === "ASSISTANT" || user?.role === "CLIENT") {
        return <QuestDashboard />;
    }
    return <QuestDashboard />;
}

export default function App() {
    const { user } = useAuth();

    return (
        <>
            {user && <Navbar />}
            <Routes>
                <Route
                    path="/dashboard"
                    element={
                        <Protected>
                            <Dashboard />
                        </Protected>
                    }
                />
                <Route
                    path="/quest/:id"
                    element={
                        <Protected>
                            <QuestPage />
                        </Protected>
                    }
                />
                <Route
                    path="/adventurers"
                    element={
                        <Protected>
                            <AdventurerDashboard />
                        </Protected>
                    }
                />
                <Route
                    path="/adventurer/:id"
                    element={
                        <Protected>
                            <AdventurerDetails />
                        </Protected>
                    }
                />
                <Route
                    path="/guild"
                    element={
                        <Protected>
                            <GuildDashboard />
                        </Protected>
                    }
                />
                <Route path="/" element={<LoginRoute />} />
                <Route path="/logout" element={<LogoutRoute />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
