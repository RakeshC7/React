import "./Input.css";

const Input = ({ label, value, placeholder, onChange, className }) => {
    const classes = className ? className + " " + "inputBox" : "inputBox";
    return (
        <input
            className={classes}
            placeholder={placeholder}
            onChange={onChange}
            label={label}
            value={value}
        />
    );
};
export default Input;
