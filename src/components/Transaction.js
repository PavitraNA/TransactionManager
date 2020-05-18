import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import styles from './Transaction.module.css'

const Transaction = ({transaction}) => {
    const { deleteTransaction, getCurrencyFormatter } = useContext(GlobalContext)
    const fmtr = getCurrencyFormatter()

    const css = transaction.amount < 0 
        ? styles.minus 
        : styles.plus

    const txt = (transaction.text) ? transaction.text : '<Empty>'

    return (
        <li >
            <span className={[styles.transaction, css].join(' ')} ><b>{fmtr.format(transaction.amount)}</b></span>
            <span><b>{txt}</b></span>
            <button className={styles.deleteBtn} onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

export default Transaction