import { useState } from "react";

const useInput = (validateValue) => {
    
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsvalid =  validateValue(enteredValue);
    const hasError = !valueIsvalid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const valueBlueHandler = (event) =>{
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsvalid,
        hasError,
        valueChangeHandler,
        valueBlueHandler,
        reset
    };
}

export default useInput;