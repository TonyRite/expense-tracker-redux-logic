import { useSelector } from "react-redux";
import { TransactionType } from "./Balance";
import Transaction from "./Transaction";

export default function TransactionList() {
  const transactions = useSelector(
    
    (state:{transactions:TransactionType[]}) => state!.transactions);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction: TransactionType) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}
