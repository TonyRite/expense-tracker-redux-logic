export type transactionType = {
  id: number;
  text: string;
  amount: number;
};

export function deleteTransaction(id: number): { type: string, payload: number } {
  return {
    type: "DELETE_TRANSACTION",
    payload: id,
  };
}
export function addTransaction(transaction: transactionType) {
  return {
    type: "ADD_TRANSACTION",
    payload: transaction,
  };
}
