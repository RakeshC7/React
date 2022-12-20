import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) => {
        // console.log(e.target.value);
        setEnteredTitle(e.target.value);
    }

    const amountChangeHandler = (e) => {
        // console.log(e.target.value);
        setEnteredAmount(e.target.value);
    }

    const dateChangeHandler = (e) => {
        // console.log(e.target.value);
        setEnteredDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if( enteredTitle && enteredAmount && enteredDate ){
            const expenseDate = {
                title : enteredTitle,
                amount : enteredAmount,
                date : new Date(enteredDate),
            }
            // console.log(expenseDate);
            // child-to-parent Component Communication
            props.onSaveExpenseData(expenseDate);
        }
        else{
            alert("please fill all the input fields.")
        }
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }



    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        mini=".01"
                        step=".01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type = "date"
                        mini = "2019-01-01"
                        max = "2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;