import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./login/Login";
import { Dashboard } from "./components/Quest/QuestDashboard";
import { type User } from "../../../packages/shared/src/types/user.type";

export const getUser = (): User => ({
    id: "1",
    name: "Test User",
    role: "ASSISTANT",
    createdAt: new Date(),
    adventurerId: null,
});

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
