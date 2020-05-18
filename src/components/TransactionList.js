import React, { useContext } from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../context/GlobalState'

import styles from './TransactionList.module.css'

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)

    return (
        <>
            <h3>Transaction List</h3>
            <ul id="list" className={styles.list}>
                {transactions
                    .sort((a,b) => b.id - a.id)
                    .map(t => <Transaction key={t.id} transaction={t} /> )}
            </ul>
        </>
    )
}

export default TransactionList