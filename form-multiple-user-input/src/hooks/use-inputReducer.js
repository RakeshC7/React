import { useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false
};

const inputStateReducer = (state, action) => {
    if(action.type === 'INPUT'){
        return { value: action.value, isTouched: state.isTouched }
    }
    if(action.type === 'BLUR'){
        return { isTouched: true, value: state.value }
    }
    if(action.type === 'RESET'){
        return { isTouched: false, value: '' };
    }

    return initialInputState;
};

const useInputReducer = (validateValue) => {
    
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    // const [enteredValue, setEnteredValue] = useState('');
    // const [isTouched, setIsTouched] = useState(false);

    const valueIsvalid =  validateValue(inputState.value);
    const hasError = !valueIsvalid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({
            type: 'INPUT',
            value: event.target.value
        });
        // setEnteredValue(event.target.value);
    }

    const valueBlueHandler = (event) =>{
        dispatch({
            type: 'BLUR'
        });
    }

    const reset = () => {
        dispatch({
            type: 'RESET',
        });
        // setEnteredValue('');
        // setIsTouched(false);
    }

    return {
        value: inputState.value,
        isValid: valueIsvalid,
        hasError,
        valueChangeHandler,
        valueBlueHandler,
        reset
    };
}

export default useInputReducer;