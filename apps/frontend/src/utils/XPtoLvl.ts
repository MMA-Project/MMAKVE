export function XPtoLvl(xp: number): number {
    const a = 0.000002631;
    const p = 0.7750586;
    const level = 100 * Math.pow(1 - Math.exp(-a * xp), p);
    return Math.min(100, Math.floor(level));
}
