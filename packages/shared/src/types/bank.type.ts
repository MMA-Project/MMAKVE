export type Bank = {
    balance: number;
    transactions: Transaction[];
};

export type Transaction = {
    id: number;
    name: string;
    amount: number;
    date: number;
}
