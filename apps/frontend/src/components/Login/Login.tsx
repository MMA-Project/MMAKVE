import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface LoginFormValues {
    username: string;
    password: string;
    confirmPassword?: string;
}

interface FieldErrors {
    username?: string;
    password?: string;
    confirmPassword?: string;
    global?: string;
    success?: string;
}

export default function Login() {
    const [values, setValues] = useState<LoginFormValues>({
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState<FieldErrors>({});
    const navigate = useNavigate();
    const { login, register } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [mode, setMode] = useState<"login" | "register">("login");

    function validate(next: LoginFormValues): FieldErrors {
        const e: FieldErrors = {};
        if (!next.username.trim()) e.username = "Nom d'utilisateur requis";
        if (!next.password) e.password = "Mot de passe requis";
        else if (next.password.length < 6) e.password = "Au moins 6 caractères";
        if (mode === "register") {
            if (!next.confirmPassword) e.confirmPassword = "Confirmation requise";
            else if (next.password && next.confirmPassword !== next.password)
                e.confirmPassword = "Les mots de passe ne correspondent pas";
        }
        return e;
    }

    function handleChange<K extends keyof LoginFormValues>(key: K, value: LoginFormValues[K]) {
        const next = { ...values, [key]: value };
        setValues(next);
        const e = validate(next);
        setErrors((prev) => ({ ...prev, [key]: (e as any)[key] }));
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const validation = validate(values);
        setErrors(validation);
        if (Object.keys(validation).length > 0) return;

        try {
            if (mode === "login") {
                await login(values.username, values.password);
                navigate("/dashboard", { replace: true });
            } else {
                await register(values.username, values.password);
                navigate("/dashboard", { replace: true });
            }
        } catch (err: any) {
            setErrors({ global: err.message || "Erreur inconnue" });
        }
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 p-4">
            <form
                onSubmit={handleSubmit}
                noValidate
                className="w-full max-w-sm bg-neutral-900/90 backdrop-blur-sm text-neutral-100 rounded-2xl shadow-xl shadow-black/50 p-8 space-y-5 border border-neutral-800"
            >
                <h1 className="text-center text-2xl font-semibold tracking-tight">
                    {mode === "login" ? "Connexion" : "Créer un compte"}
                </h1>

                {errors.global && (
                    <div
                        role="alert"
                        className="text-sm rounded-lg border border-red-500/60 bg-red-900/40 px-3 py-2 text-red-200"
                    >
                        {errors.global}
                    </div>
                )}
                {errors.success && !errors.global && (
                    <div
                        role="status"
                        className="text-sm rounded-lg border border-emerald-500/60 bg-emerald-900/40 px-3 py-2 text-emerald-200"
                    >
                        {errors.success}
                    </div>
                )}

                <div className="space-y-1">
                    <label
                        htmlFor="username"
                        className="block text-xs font-medium uppercase tracking-wide text-neutral-300"
                    >
                        Nom d'utilisateur
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        value={values.username}
                        onChange={(e) => handleChange("username", e.target.value)}
                        className={`w-full rounded-xl border bg-neutral-800/70 px-3.5 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-neutral-500 ${errors.username ? "border-red-500/70 focus:ring-red-500 focus:border-red-500" : "border-neutral-700 hover:border-neutral-600"}`}
                        placeholder="john.doe"
                    />
                    {errors.username && (
                        <span className="block text-[11px] font-medium text-red-400">
                            {errors.username}
                        </span>
                    )}
                </div>

                <div className="space-y-1">
                    <label
                        htmlFor="password"
                        className="block text-xs font-medium uppercase tracking-wide text-neutral-300"
                    >
                        Mot de passe
                    </label>
                    <div
                        className={`group flex items-stretch rounded-xl border bg-neutral-800/70 overflow-hidden transition focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 ${errors.password ? "border-red-500/70 focus-within:ring-red-500 focus-within:border-red-500" : "border-neutral-700 hover:border-neutral-600"}`}
                    >
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            value={values.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                            className="w-full bg-transparent px-3.5 py-2.5 text-sm outline-none placeholder:text-neutral-500"
                            placeholder="••••••"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((s) => !s)}
                            aria-label={
                                showPassword
                                    ? "Masquer le mot de passe"
                                    : "Afficher le mot de passe"
                            }
                            className="px-3 flex items-center text-lg select-none text-neutral-400 hover:text-neutral-200 transition disabled:opacity-40 focus:outline-none focus-visible:bg-neutral-700/40"
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>
                    {errors.password && (
                        <span className="block text-[11px] font-medium text-red-400">
                            {errors.password}
                        </span>
                    )}
                </div>

                {mode === "register" && (
                    <div className="space-y-1">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-xs font-medium uppercase tracking-wide text-neutral-300"
                        >
                            Confirmer le mot de passe
                        </label>
                        <div
                            className={`group flex items-stretch rounded-xl border bg-neutral-800/70 overflow-hidden transition focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 ${errors.confirmPassword ? "border-red-500/70 focus-within:ring-red-500 focus-within:border-red-500" : "border-neutral-700 hover:border-neutral-600"}`}
                        >
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                autoComplete="new-password"
                                value={values.confirmPassword}
                                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                                className="w-full bg-transparent px-3.5 py-2.5 text-sm outline-none placeholder:text-neutral-500"
                                placeholder="••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword((s) => !s)}
                                aria-label={
                                    showConfirmPassword
                                        ? "Masquer le mot de passe"
                                        : "Afficher le mot de passe"
                                }
                                className="px-3 flex items-center text-lg select-none text-neutral-400 hover:text-neutral-200 transition disabled:opacity-40 focus:outline-none focus-visible:bg-neutral-700/40"
                            >
                                {showConfirmPassword ? "🙈" : "👁️"}
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <span className="block text-[11px] font-medium text-red-400">
                                {errors.confirmPassword}
                            </span>
                        )}
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-600 px-4 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-indigo-900/30 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-neutral-900 hover:brightness-110 active:scale-[.985] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {mode === "login" ? "Se connecter" : "Créer le compte"}
                </button>
                <div className="pt-1 text-center space-y-1">
                    {mode === "login" ? (
                        <p className="text-[11px] text-neutral-500">
                            Pas de compte ?{" "}
                            <button
                                type="button"
                                onClick={() => {
                                    setMode("register");
                                    setErrors({});
                                }}
                                className="text-indigo-400 hover:text-indigo-300 font-medium"
                            >
                                Créer un compte
                            </button>
                        </p>
                    ) : (
                        <p className="text-[11px] text-neutral-500">
                            Déjà un compte ?{" "}
                            <button
                                type="button"
                                onClick={() => {
                                    setMode("login");
                                    setErrors({});
                                    setValues((v) => ({ ...v, password: "", confirmPassword: "" }));
                                }}
                                className="text-indigo-400 hover:text-indigo-300 font-medium"
                            >
                                Se connecter
                            </button>
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}
