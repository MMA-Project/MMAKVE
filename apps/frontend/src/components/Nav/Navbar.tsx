import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function Navbar() {
    const { user, logout } = useAuth();
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false);
            }
        };

        if (isProfileOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isProfileOpen]);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    if (!user) return null;

    return (
        <nav className="bg-slate-900 border-b border-slate-700 fixed top-0 inset-x-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            to="/dashboard"
                            className="text-xl font-bold text-slate-100 hover:text-indigo-400 transition"
                        >
                            ⚔️ MMAKVE
                        </Link>
                    </div>

                    {user.role === "ASSISTANT" && (
                        <div className="hidden md:flex items-center space-x-4">
                            <Link
                                to="/dashboard"
                                className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-slate-100 hover:bg-slate-800 transition"
                            >
                                Quêtes
                            </Link>
                            <Link
                                to="/adventurers"
                                className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-slate-100 hover:bg-slate-800 transition"
                            >
                                Aventuriers
                            </Link>
                            <Link
                                to="/guild"
                                className="px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-slate-100 hover:bg-slate-800 transition"
                            >
                                Guilde
                            </Link>
                        </div>
                    )}

                    <div className="relative" ref={profileRef}>
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:text-slate-100 hover:bg-slate-800 transition"
                        >
                            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-slate-100 font-semibold">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <span className="hidden sm:inline">{user.name}</span>
                            <svg
                                className={`w-4 h-4 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {isProfileOpen && (
                            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-slate-800 border border-slate-700">
                                <div className="py-1">
                                    <div className="px-4 py-2 text-xs text-slate-400 border-b border-slate-700">
                                        {user.role === "CLIENT" && "Client"}
                                        {user.role === "ASSISTANT" && "Assistant"}
                                        {user.role === "ADVENTURER" && "Aventurier"}
                                    </div>

                                    {user.role === "ASSISTANT" && (
                                        <div className="md:hidden border-b border-slate-700">
                                            <Link
                                                to="/dashboard"
                                                className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-slate-100"
                                                onClick={() => setIsProfileOpen(false)}
                                            >
                                                Quêtes
                                            </Link>
                                            <Link
                                                to="/adventurers"
                                                className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-slate-100"
                                                onClick={() => setIsProfileOpen(false)}
                                            >
                                                Aventuriers
                                            </Link>
                                            <Link
                                                to="/guild"
                                                className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-slate-100"
                                                onClick={() => setIsProfileOpen(false)}
                                            >
                                                Guilde
                                            </Link>
                                        </div>
                                    )}

                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-700 hover:text-red-300"
                                    >
                                        Se déconnecter
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
