import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        { id: 1, text: "Gorcery", amount: -400 },
        { id: 2, text: "Sales", amount: 800 },
        { id: 3, text: "Beauty Palour", amount: -100 },
        { id: 4, text: "Freelancing", amount: 450 },
    ]
}

// Create Context
export const GlobalContext = createContext(initialState)

// Provider Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTIONLIST',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTIONLIST',
            payload: transaction
        })
    }

    function getCurrencyFormatter() {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        })
    }

    return (
        <GlobalContext.Provider value={{ 
            transactions: state.transactions,
            deleteTransaction, addTransaction,
            getCurrencyFormatter
        }}>
            {children}
        </GlobalContext.Provider>
    )
}