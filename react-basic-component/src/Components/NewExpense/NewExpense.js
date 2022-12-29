import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) =>{

    const [isEditing, setIsEditing] = useState(false);

    // child-to-parent Component Communication
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log("this is newExpense File", expenseData);
        props.onNewExpenseData(expenseData);
        setIsEditing(false);
    }

    // Add New Expense Handler
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    // Form Cancel Btn Handler
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            { isEditing ?
                <ExpenseForm onExpenseData = {saveExpenseDataHandler} onCancel={stopEditingHandler}/> :
                <button type="button" onClick={startEditingHandler}>Add New Expense</button> 
            }
        </div>
    );
}

export default NewExpense;