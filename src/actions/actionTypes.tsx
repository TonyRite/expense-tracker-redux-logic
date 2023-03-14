import { Transaction } from "../components/Balance";

export function deleteTransaction(id:number){
        return {
            type:'DELETE_TRANSACTION',
            payload:id
        };
    }
export function addTransaction(transaction: Transaction){
    return {
        type:'ADD_TRANSACTION',
        payload:transaction,
    }
}