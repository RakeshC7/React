import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

// CSS Imports
import classes from "./Header.module.css";
// image Import
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Foodie' s Cafe</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="meals image"/>
            </div>
        </Fragment>
    );
}

export default Header;