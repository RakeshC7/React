import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from "../Ui/Card";
import './Expenses.css';

const NewExpense = (props) => {
	
	const [selectYear, setSelectedYear] = useState('2020');
	const onSelectedFilterHandler = (filteredData) => {
		setSelectedYear(filteredData);
	}

    return (
			<Card className="expenses">
				<ExpensesFilter selected={selectYear}  selectedFilterData={onSelectedFilterHandler}/>
				{
					props.items.map( (item) => (
						<ExpenseItem
							title={item.title}
							amount={item.amount}
							date={item.date}
						/>
					))
				}
			</Card>
    );
}

export default NewExpense;