import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // For Approach 2nd and 3rd - combining all states

    // const [userInput, setUserInput]=useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });



    const titleChangeHandler = (event) => {
        // 1st Approach - multiple state Approach

        setEnteredTitle(event.target.value);

        // 2nd Approach - In many cases, both will work fine, but keep in mind that I mentioned that Reacts schedules state updates, it doesn't perform them instantly. And therefore, theoretically, if you schedule a lot of state updates at the same time, you could be depending on an outdated or incorrect state snapshot

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // 3rd approach - if you use this approach, React will guarantee that the state snapshot it gives you here in this inner function, will always be the latest state snapshot, 
        // NOte:- If your state update depends on the previous state, use this function form. 

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value,
        //     }
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // 2nd Approach

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // 2nd Approach

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        // console.log(expenseData);

        // child-to-parent Component Communication
        props.onExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type = "text"
                    value={enteredTitle}
                    onChange = {
                        titleChangeHandler
                    }
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
                    onChange = {
                        dateChangeHandler
                    }
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;