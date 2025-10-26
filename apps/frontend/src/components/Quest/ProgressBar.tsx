export const ProgressBar = ({ percent }: { percent: number }) => {
    return (
        <div className="w-full bg-slate-800 rounded h-3 overflow-hidden border border-slate-700">
            <div className="h-full relative overflow-hidden" style={{}}>
                <div
                    className="h-full relative"
                    style={{
                        width: `${Math.max(0, Math.min(100, percent))}%`,
                        transition: "width 400ms ease",
                        backgroundColor: percent >= 100 ? "#16a34a" : "#2563eb",
                        overflow: "hidden",
                    }}
                >
                    {percent > 0 && percent < 100 && (
                        <div
                            aria-hidden
                            style={{
                                position: "absolute",
                                inset: 0,
                                pointerEvents: "none",
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,0.22) 25%, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.22) 75%, rgba(255,255,255,0.06) 75%, rgba(255,255,255,0.06) 100%)",
                                backgroundSize: "40px 40px",
                                mixBlendMode: "screen",
                                animation: "copilot-wave 1.2s linear infinite",
                            }}
                        />
                    )}
                </div>
            </div>

            <style>
                {`
            @keyframes copilot-wave {
                from { background-position: 0 0; }
                to   { background-position: 40px 0; }
            }
            `}
            </style>
        </div>
    );
};
