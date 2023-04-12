import useInput from "../hooks/use-input";


const BasicForm = (props) => {

    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: enteredFirstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstNameInput
    } = useInput((value) => value.trim() !== '');

    let formIsValid = false;

    if(enteredFirstNameIsValid){
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        if(!enteredFirstNameIsValid){
            return;
        }

        console.log(enteredFirstName);
        resetFirstNameInput();
    }

    const firstNameInputClasses = enteredFirstNameHasError ? "form-control invalid" : "form-control"

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='control-group'>
                <div className={firstNameInputClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input 
                        type='text' 
                        id='name'
                        value={enteredFirstName}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                    />
                    {enteredFirstNameHasError && <p className="error-text">First Name should not be empty !</p>}
                </div>
                <div className='form-control'>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='last-name' />
                </div>
            </div>
            <div className='form-control'>
                <label htmlFor='name'>E-Mail Address</label>
                    <input type='text' id='email' />
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
