import React from 'react';
import './Button.css';

const Button = (props) => {

    // 3 Buttons with different Class names like:
    // default - themeButton
    // danger/red Button - dangerButton
    // dark Button - darkButton

    const additionalClasses = props.className + ' ' + 'themeButton';

    return (
        <React.Fragment>
            {
                props.type === 'link' ?
                    <a
                        href={props.href}
                        className={additionalClasses}
                    >{props.children}</a> :
                    <button
                        className={props.className ? additionalClasses : 'themeButton'}
                        type={props.type ? props.type : 'button'}
                    >
                        {props.children}
                    </button>
            }
        </React.Fragment>
    )
}

export default Button
