import React from 'react'
import "../Expenses/ExpenseDate.css"

function ExpenseDate(props) {

    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', {month : 'long'})
    const day = props.date.toLocaleString('en-US' ,{day: '2-digit'} )
    return (
        <div className="expense-date">
            <div className="expense-item__year">{year}</div>
            <div className="expense-item__month">{month}</div>
            <div className="expense-item__day">{day}</div>
        </div>
    )
}

export default ExpenseDate
