// import useInput from "../hooks/use-input";
import useInputReducer from "../hooks/use-inputReducer";

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
    // FirstName UseInput
    const {
        value: enteredFirstName,
        isValid: firstNameIsvalid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        valueBlueHandler: firstNameBlurHandler,
        reset: resetFirstName
    } = useInputReducer(isNotEmpty);
    // LastName useInput
    const {
        value: enteredLastName,
        isValid: lastNameIsvalid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        valueBlueHandler: lastNameBlurHandler,
        reset: resetLastName
    } = useInputReducer(isNotEmpty);
    // Email useInput
    const {
        value: enteredEmail,
        isValid: emailIsvalid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        valueBlueHandler: emailBlurHandler,
        reset: resetEmail
    } = useInputReducer(isEmail);


    let formIsValid = false;

    if(firstNameIsvalid && lastNameIsvalid && emailIsvalid){
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        // we add this instead of bottom condition because user can change/remove button attribute of disabled for that reason we add ...
        if(!formIsValid){
            return;
        }

        // if(!firstNameIsvalid && !lastNameIsvalid && !emailIsvalid){
        //     return;
        // }

        console.log(enteredFirstName, enteredLastName, enteredEmail);
        resetFirstName();
        resetLastName();
        resetEmail();
    }

    const FirstNameInputClasses = firstNameHasError ? "form-control invalid" : "form-control";
    const LastNameInputClasses = lastNameHasError ? "form-control invalid" : "form-control";
    const EmailInputClasses = emailHasError ? "form-control invalid" : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className='control-group'>
                <div className={FirstNameInputClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input 
                        type='text' 
                        id='name'
                        value={enteredFirstName}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                    />
                    {firstNameHasError && <p className="error-text">FirstName should not be empty !</p>}
                </div>
                <div className={LastNameInputClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input 
                        type='text' 
                        id='last-name'
                        value={enteredLastName} 
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                    />
                    {lastNameHasError && <p className="error-text">LastName should not be empty !</p>}
                </div>
            </div>
            <div className={EmailInputClasses}>
                <label htmlFor='name'>E-Mail Address</label>
                    <input 
                        type='text' 
                        id='email' 
                        value={enteredEmail}    
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                    />
                    {emailHasError && <p className="error-text">Email should not be empty or must have proper.</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
