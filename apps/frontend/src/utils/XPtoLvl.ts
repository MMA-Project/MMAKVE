export function XPtoLvl(xp: number): number {
    const a = 0.000002631;
    const p = 0.7750586;
    const level = 100 * Math.pow(1 - Math.exp(-a * xp), p);
    return Math.floor(level);
}

export function progressToNextLevel(xp: number): {
    percent: number;
    remainingXP: number;
    nextLevel: number;
} {
    const currentLevel = XPtoLvl(xp);
    const xpForCurrentLevel = Math.ceil(
        -Math.log(1 - Math.pow(currentLevel / 100, 1 / 0.7750586)) / 0.000002631,
    );
    const xpForNextLevel = Math.ceil(
        -Math.log(1 - Math.pow((currentLevel + 1) / 100, 1 / 0.7750586)) / 0.000002631,
    );
    const progress = (xp - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel);
    return {
        percent: Math.min(100, Math.max(0, Math.round(progress * 100))),
        remainingXP: xpForNextLevel - xp,
        nextLevel: currentLevel + 1,
    };
}
