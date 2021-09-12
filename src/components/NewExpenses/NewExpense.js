import React from 'react'

import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const saveDataHandler = (saveExpenseData) => {
        const expenseData = {
            ...saveExpenseData, 
            id : Math.random()
        }
        props.onSaveExpense(expenseData)
    }


    return (
        <div className="new-expense">
            <ExpenseForm onSaveDataHandler={saveDataHandler} />
        </div>
    )
}

export default NewExpense
