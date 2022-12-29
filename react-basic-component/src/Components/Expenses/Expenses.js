import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from "../Ui/Card";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const NewExpense = (props) => {

    const [selectedYear, setSelectedYear] = useState('2022');

    const onSelectedFilterHandler = (filteredData) => {
        setSelectedYear(filteredData);
    }

    const filteredExpenses = props.items.filter((item) => {
        return item.date.getFullYear().toString() === selectedYear;
    });

    

    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} selectedFilterData = {onSelectedFilterHandler}/>
            
            {/* or alternative of ternary conditional operator */}

            {/* {filteredExpenses.length === 0 && <p>No Expense Found.</p>} */}
            {/* { filteredExpenses.length > 0 && 
                filteredExpenses.map(item => (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))
            }  */}
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default NewExpense;