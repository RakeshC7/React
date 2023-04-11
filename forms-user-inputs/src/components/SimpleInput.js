// import { useRef, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const { 
        value : enteredName, 
        isValid: enteredNameIsValid,
        hasError: nameInputHasError, 
        valueChangeHandler: nameChangedHandler, 
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput((value) => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput((value) => value.includes('@'));

    // Name Inputbox
    // const [enteredName, setEnteredName] = useState('');
    // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    // email Inputbox
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    // Validation for Name
    // const enteredNameIsValid = enteredName.trim() !== '';
    // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    // Validation for Email
    // const enteredEmailIsValid = enteredEmail.includes('@');
    // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    // Name Handler
    // const nameInputChangeHandler = (event) => {
    //     setEnteredName(event.target.value);
    // }
    // const nameInputBlurHandler = (event) => {
    //     setEnteredNameTouched(true);
    // }
    // Email Handler
    // const emailInputChangeHadler = (event) => {
    //     setEnteredEmail(event.target.value);
    // }
    // const emailInputBlurHandler = (event) => {
    //     setEnteredEmailTouched(true);
    // }

    const formSubmissionHandler = (event) =>{
        event.preventDefault();

        // setEnteredNameTouched(true);
        // setEnteredEmailTouched(true);

        if(!enteredNameIsValid) {
            return;
        }

        console.log(enteredName);
        resetNameInput();
        // setEnteredName('');
        // setEnteredNameTouched(false);
        
        console.log(enteredEmail);
        resetEmailInput();
        // setEnteredEmail('');
        // setEnteredEmailTouched(false);
    };

    const nameInputClasses = nameInputHasError 
    ? 'form-control invalid'
    : 'form-control';

    const emailInputClasses = emailInputHasError 
    ? 'form-control invalid'
    : 'form-control';

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input 
                    value={enteredName}
                    type='text' 
                    id='name' 
                    onChange={nameChangedHandler} 
                    onBlur={nameBlurHandler}
                    /> 
                { nameInputHasError && <p className="error-text">Name must not be empty.</p> }
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your E-mail</label>
                <input 
                    value={enteredEmail}
                    type='email' 
                    id='email' 
                    onChange={emailChangeHandler} 
                    onBlur={emailBlurHandler}
                    /> 
                { emailInputHasError && <p className="error-text">Please enter Valid E-mail.</p> }
            </div>
            <div className="form-actions">
            <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
