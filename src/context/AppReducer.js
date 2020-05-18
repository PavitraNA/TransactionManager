export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTIONLIST':
            return {
                ...state,
                transactions: state.transactions
                    .filter(t => t.id !== action.payload)
            } 
        case 'ADD_TRANSACTIONLIST':
            return {
                ...state,
                transactions: [ ...state.transactions, action.payload ]
            }
        default:
            return state
    }
}