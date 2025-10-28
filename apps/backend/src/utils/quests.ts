export const calculateSoloWinProbability = (xp_player: number, xp_required: number) => {
    return Math.min(xp_player, xp_required) / xp_required;
};

/**
 * Calculate the team's win probability based on SOLO WIN PROBABILITY.
 * @param individualRates Array of individual player win rates, calculated using `calculateSoloWinProbability`.
 * @returns The calculated team win probability.
 * >= 0.95 = 100% win
 */
export const calculateTeamWinProbability = (individualRates: number[]): number => {
    if (individualRates.length === 0) return 0;
    const average = individualRates.reduce((sum, rate) => sum + rate, 0) / individualRates.length;
    return Math.pow(average, 0.8);
};

/**
 * Calculate the reward distribution for a player.
 * @param xp_player The player's experience points.
 * @param j_base The base daily rate for the quest at 0xp.
 * @returns The calculated reward distribution.
 * ∑(Jactuel​×Durée_mission​)+Consommables+Réparations est < Prime = Rentable
 */
export const calculateRewardDistribution = (xp_player: number, j_base: number) => {
    const rate = j_base * (1 + 0.5 * Math.log(Math.max(xp_player, 1)));
    return Math.round(rate * 100) / 100;
};

/**
 * Calculate the rest time for a player.
 * @param duration_quest The duration of the quest.
 * @param xp_player The player's experience points.
 * @param xp_required The required experience points for the quest.
 * @returns The calculated rest time in days, rounded up.
 */
export const calculateRestTime = (
    duration_quest: number,
    xp_player: number,
    xp_required: number,
): number => {
    return Math.ceil(0.5 * duration_quest * (xp_player / xp_required));
};
