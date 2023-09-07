import "./Button.css";

const Button = (props) => {
    const buttonType = props.type ? props.type : "button";
    const classes = props.className
        ? props.className + " " + "themeButton"
        : "themeButton";
    return (
        <>
            <button type={buttonType} className={classes} onClick={props.onClick}>
                {props.children}
            </button>
        </>
    );
};

export default Button;
