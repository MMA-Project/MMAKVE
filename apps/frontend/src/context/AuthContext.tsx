import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import type { User } from "../../../../packages/shared/src/types/user.type";

const mockClient: User = {
    id: "1004",
    name: "Lyria Moonshadow",
    role: "CLIENT",
    createdAt: new Date("2024-02-20T12:00:00Z"),
};

const mockAssistant: User = {
    id: "assistant-456",
    name: "Utilisateur assistant",
    createdAt: new Date("2024-01-01T00:00:00Z"),
    role: "ASSISTANT",
};

interface AuthContextValue {
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
    register: (username: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(() => {
        // Restaurer l'utilisateur depuis localStorage au démarrage
        try {
            const stored = localStorage.getItem("auth");
            if (stored) {
                const data = JSON.parse(stored);
                return data.user ?? null;
            }
        } catch {
            // ignore
        }
        return null;
    });
    const [loading, setLoading] = useState(false);

    const login = useCallback(async (_username: string, _password: string) => {
        setLoading(true);
        try {
            setUser(mockAssistant);
            localStorage.setItem("auth", JSON.stringify({ user: mockAssistant }));
        } finally {
            setLoading(false);
        }
    }, []);

    const register = useCallback(async (_username: string, _password: string) => {
        setLoading(true);
        try {
            setUser(mockClient);
            localStorage.setItem("auth", JSON.stringify({ user: mockClient }));
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem("auth");
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth doit être utilisé dans AuthProvider");
    return ctx;
}

export function Protected({ children }: { children: ReactNode }) {
    const { user } = useAuth();
    if (!user) return <Navigate to="/" replace />;
    return <>{children}</>;
}
