export const computeProgress = (startDate?: Date, endDate?: Date, nowDate = new Date()) => {
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    let percent = 0;
    let totalDays: number | null = null;
    let daysLeft: number | null = null;

    if (start && end && !isNaN(start.getTime()) && !isNaN(end.getTime()) && end > start) {
        const totalMs = end.getTime() - start.getTime();
        const elapsedMs = Math.min(Math.max(nowDate.getTime() - start.getTime(), 0), totalMs);
        percent = Math.round((elapsedMs / totalMs) * 100);
        totalDays = Math.max(1, Math.ceil(totalMs / (1000 * 60 * 60 * 24)));
        daysLeft = Math.ceil((end.getTime() - nowDate.getTime()) / (1000 * 60 * 60 * 24));
    }

    return { start, end, percent, totalDays, daysLeft };
};
