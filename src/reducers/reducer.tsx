import { Transaction } from "../components/Balance";

const initialState = {
    transactions:[
        { id: 1, text: 'Love', amount: 2000 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}


function reducer(state=initialState, action: { type: string; payload: number|Transaction; }){
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id!==action.payload)
            }
        case 'ADD_TRANSACTION':
    // try uisng case narrowing ili acion.payload ya chini iwe Transaction type ,ambayo nimeimport hapo juu
            return {
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        default:
            return state;
    }
}

export default reducer;