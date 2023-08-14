import './InputBox.css';

const InputBox = (props) => {
    const additionalInputClasses = props.className + ' ' + 'inputBox'
    return (
        <div className={props.inputBox ? additionalInputClasses : 'inputBox'}>
            <input
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default InputBox
