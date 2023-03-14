export function deleteTransaction(id){
        return {
            type:'DELETE_TRANSACTION',
            payload:id
        };
    }
export function addTransaction(transaction){
    return {
        type:'ADD_TRANSACTION',
        payload:transaction,
    }
}