/**
 * Formate un montant en euros avec 2 décimales
 * @param amount Le montant à formater
 * @returns Le montant formaté avec 2 décimales (ex: "1 234,56")
 */
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);
}
