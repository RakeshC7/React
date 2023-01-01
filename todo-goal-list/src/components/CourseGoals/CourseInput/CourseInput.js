import React, { useState } from 'react';
// import styled from 'styled-components';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
// import './CourseInput.css';


// Note: <label style={{color : !isValid ? 'red' : 'black'}}>Course Goal</label>
// style={{color : !isValid ? 'red' : 'black'}} <--- this is called inline style and this is not preferred way to implement

// so there is 4 techniques i.e
// 1) inline css
// 2) class based css
// 3) using styled component
	// a) styled component with className with external css file 
	// b) styled component with props with internal css and conditional (props) css
		// ex.:- <div className={styles['form-control']}>
// 4) using CSS Modules

// const FormControl = styled.div`
// 	margin: 0.5rem 0;

// 	& label {
// 	margin-bottom: 0.5rem;
// 	font-weight: bold;
// 	display: block;
// 	color: ${ props => ( props.invalid ? 'red' : 'black') };
// 	}

// 	& input {
// 	display: block;
// 	width: 100%;
// 	border: 1px solid ${props => (props.invalid ? 'red' : '#ccc' )};
// 	background-color: ${props => (props.invalid ? '#ffd7d7' : 'transparent')}; 
// 	font: inherit;
// 	line-height: 1.5rem;
// 	padding: 0 0.25rem;
// 	}

// 	& input:focus {
// 	outline: none;
// 	background: #fad0ec;
// 	border-color: #8b005d;
// 	}
// `;

const CourseInput = props => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = event => {
		if( event.target.value.trim().length > 0 ){
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = event => {
		event.preventDefault();
		if(enteredValue.trim().length === 0){
			setIsValid(false);
			return;
		}
		props.onAddGoal(enteredValue);
	};

	return (
	<form onSubmit={formSubmitHandler}>
		<div className={`${styles['form-control']} ${!isValid && styles.invalid}`}
		>
		{/* (this is styled component based styling with props) */}
		{/* <FormControl invalid ={!isValid}> */}
			{/* this is classname based (below this line). however, we can implement using inside of styled component follow above line */}
			{/* (this is styled component based styling with className)
				<FormControl className={ !isValid && 'invalid'}>
			*/}
			{/* (this is className based styling)
				<div className={`form-control ${ !isValid ? 'invalid' : ''}`}>
			*/}
			<label
				//(this is inline style) style={{color : !isValid ? 'red' : 'black'}}
			>Course Goal</label>
			<input 
				// style={{backgroundColor: !isValid ? 'rgba(255,0,0,0.4)' : 'transparent' }}
				type="text"
				onChange={goalInputChangeHandler}
			/>
			{/* </div> */}
		{/* </FormControl> */}
		</div>
		<Button type="submit">Add Goal</Button>
	</form>
	);
};

export default CourseInput;
