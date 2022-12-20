import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    // child-to-parent Component Communication
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onNewExpenseData(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;