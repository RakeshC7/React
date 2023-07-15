import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Classes from './MainNavigation.module.css';
import { useSelector } from 'react-redux';

const MainNavigation = () => {

    const items = useSelector((state) => state.cart);

    return (
        <header className={Classes.header}>
            <Link to='' className={Classes.logo}>Thunk Store</Link>
            <nav className={Classes.navbar}>
                <ul className={Classes.list}>
                    <li><NavLink to="">Home</NavLink></li>
                    <li><NavLink to="cart">Cart</NavLink></li>
                </ul>
                <p className={Classes.cartCount}>Cart items : <span>{items.length}</span> </p>
            </nav>
        </header>
    )
}

export default MainNavigation
