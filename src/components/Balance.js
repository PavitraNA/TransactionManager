import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import styles from './Balance.module.css'

export const Balance = () => {
    const { transactions, getCurrencyFormatter } = useContext(GlobalContext)
    const fmtr = getCurrencyFormatter()

    const balance = transactions.reduce((acc, t) => (acc += t.amount), 0).toFixed(2)
     return (
         <>
            <h4 className={styles.title}>Balance</h4>
            <h2 className={styles.text}>{fmtr.format(balance)}</h2>
         </>
     )
}

export default Balance