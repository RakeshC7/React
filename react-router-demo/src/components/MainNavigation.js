import { NavLink } from "react-router-dom";
import Classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={Classes.header}>
            <nav>
                <ul className={Classes.list}>
                    <li><NavLink to="" className={({ isActive }) => isActive ? Classes.active : undefined} end>Home</NavLink></li>
                    <li><NavLink to="products" className={({ isActive }) => isActive ? Classes.active : undefined}>Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;

