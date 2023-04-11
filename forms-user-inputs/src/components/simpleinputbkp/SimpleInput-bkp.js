// import { useRef, useState } from "react";
import { useState } from "react";


const SimpleInputInputBkp = (props) => {
  // BELOW LOGIC FOR THE : 
  // it is all about finding out whether the input is valid and if it was touched,
  // and if it's invalid and was touched, we wanna show the user an error, otherwise we don't want to do that.

  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  }

  const formSubmissionHandler = (event) =>{
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }


    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log("enteredValue" , enteredValue);

    // this is not official way to reset/ manipulate value directly to DOM
    // nameInputRef.current.value = '';
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  

  const nameInputClasses = nameInputIsInvalid 
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          // ref={nameInputRef} 
          value={enteredName}
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler} 
          onBlur={nameInputBlurHandler}
          /> 
        { nameInputIsInvalid && <p className="error-text">Name must not be empty.</p> }
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInputInputBkp;
