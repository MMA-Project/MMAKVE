import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login/Login";
import { QuestDashboard } from "./components/Quest/QuestDashboard";
import { type User } from "../../../packages/shared/src/types/user.type";
import QuestPage from "./components/Quest/QuestPage";

export const getUser = (): User => ({
    id: "1001",
    name: "Test User",
    role: "ASSISTANT",
    createdAt: new Date(),
});

function Dashboard() {
    if (getUser().role === "ASSISTANT" || getUser().role === "CLIENT") {
        return <QuestDashboard />;
    }
    return <QuestDashboard />;
}

export default function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/quest/:id" element={<QuestPage />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
}
