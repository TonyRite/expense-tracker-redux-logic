import { useSelector } from "react-redux";

export interface TransactionType {
  id: number;
  amount: number;
  text: string;
}
export const Balance = () => {
  const transactions = useSelector(
    (state: { transactions: TransactionType[] }) => state.transactions
  );
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};
