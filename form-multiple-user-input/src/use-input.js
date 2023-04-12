import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsvalid = validateValue(enteredValue);
    const hasError = !valueIsvalid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }
    const inputBlurHandler = (event) => {
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
        inputBlurHandler,
        reset
    };
}

export default useInput;