import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Input from './Input'

import styles from './AddNewTransaction.module.css'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')
    const [focusInput, setFocus] = useState(null)

    const { addTransaction, transactions } = useContext(GlobalContext)


    const onSubmitSpending = e => {
        e.preventDefault() 
       const t = {
           id: transactions.length+1, 
           text,
           amount: -amount.replace('$','').replace(/[,]/g,'')
       }

       addTransaction(t)

       setText('')
       setAmount('')
       focusInput.focus()
    }
    const onSubmitIncome = e => {
       e.preventDefault() 
       const t = {
           id: transactions.length+1, 
           text,
           amount: +amount.replace('$','').replace(/[,]/g,'')
       }

       addTransaction(t)

       setText('')
       setAmount('')
       focusInput.focus()
    }

    return (
        <>
            <h3>Add New Transaction</h3>
                <div className ="form-control">
                    <label>Transaction Description</label>
                    <input type="text" maxLength="20"
                        ref={ref => setFocus(ref)}
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Enter transaction details" 
                    />
                </div>
                <div className="form-control">
                    <label>Transacted Amount </label>
                    <Input 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="Enter transaction amount" 
                    />
                </div>
                <div className={styles.btnRow}>
                <button className={styles.btn} onClick={onSubmitIncome}>Add income</button>
                <div className={styles.btnSpc}></div>
                <button className={styles.btnspend} onClick={onSubmitSpending}>Add Spending</button>
                </div>
        </>
    )
}

export default AddTransaction