import React from "react";
import { useSelector } from "react-redux";
import Transaction from "./Transaction";
import { transactionType } from "../actions/actionTypes";
import { TransactionProps } from "./Transaction";

export default function TransactionList() {
  const transactions = useSelector(
    //@ts-ignore
    (state) => state!.transactions as transactionType[]
  );
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction: transactionType) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}
