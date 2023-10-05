import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Card from "../UI/Card";
import Wrapper from "../Helpers/Wrapper";
import classes from './AddUser.module.css';

const AddUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }

    const addUserHandler = event =>{
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please Enter valid name and age (non-empty values).'
            });
            return;
        }
        if(+enteredUserAge < 1){
            setError({
                title: 'Invalid Age',
                message: 'Please Enter valid age (> 0).'
            });
            return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        // setEnteredUsername('');
        // setEnteredAge('');
    }

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            { error && 
                <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>
            }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        // onChange={usernameChangeHandler}
                        // value={enteredUsername}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (Year)</label>
                    <input
                        id="age"
                        type="number"
                        // onChange={ageChangeHandler}
                        // value={enteredAge}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;