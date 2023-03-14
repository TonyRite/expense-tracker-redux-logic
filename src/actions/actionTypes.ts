import { TransactionType } from "../components/Balance";

export function deleteTransaction(id:number):{type:string,payload:number}{
        return {
            type:'DELETE_TRANSACTION',
            payload:id
        };
    }
export function addTransaction(transaction: TransactionType){
    return {
        type:'ADD_TRANSACTION',
        payload:transaction,
    }
}