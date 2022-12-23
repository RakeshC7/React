import React, { useState } from 'react';
import Button from '../Ui/Button';
import Card from '../Ui/Card';
import Modal from '../Ui/Modal';
import styles from './UserForm.module.css';

const UserForm = props => {

    // user input state manage
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError ] = useState();

    // onChange Event Handlers
    const userNameInputHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const ageInputHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    // Form Submit Event Handler
    const submitHandler = (event) => {
        event.preventDefault();
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please Enter valid name and age (non-empty values).'
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: 'Invalid Age',
                message: 'Please Enter valid age (> 0).'
            });
            return;
        }
        props.onUserData(enteredName, enteredAge);
        setEnteredName('');
        setEnteredAge('');
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            { error &&
                <Modal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                ></Modal>
            }
            <Card>
                <form onSubmit={submitHandler}>
                    <div className={styles['form-input']}>
                        <label htmlFor='username'>
                            Username
                        </label>
                        {/* handler always start with camalCase */}
                        <input
                            id="username"
                            type='text'
                            onChange={userNameInputHandler}
                            value={enteredName}
                        />   
                    </div>
                    <div className={styles['form-input']}>
                        <label htmlFor='age'>
                            Age( Years )
                        </label>
                        <input
                            id="age"
                            type='number'
                            onChange={ageInputHandler}
                            value={enteredAge}
                        />   
                    </div>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default UserForm;