import React, { useState } from 'react';
import '../Expenses/ExpenseItem.css';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title)
    // console.log("Outside " + title)

    const changeHandler = () => {
        setTitle("Updated!!!")
        // console.log("ChangeHandler " + title)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date= {props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    {props.amount}
                </div>
            </div>
            <button onClick={changeHandler}>Change Title</button>
        </ Card> 
    )
}

export default ExpenseItem
