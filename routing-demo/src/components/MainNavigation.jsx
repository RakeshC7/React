import { NavLink, Link } from 'react-router-dom';
import Classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return <header className={Classes.header}>
        <nav>
            <ul className={Classes.list}>
                <li><NavLink to='' className={({ isActive }) => isActive ? Classes.active : undefined} end>Home</NavLink></li>
                <li><NavLink to='products' className={({ isActive }) => isActive ? Classes.active : undefined}>Products</NavLink></li>
            </ul>
            <Link to=''><span id={Classes.logo}>Ancestry</span></Link>
            <ul className={Classes.list}>
                <li><NavLink to='about' className={({ isActive }) => isActive ? Classes.active : undefined} >About</NavLink></li>
                <li><NavLink to='blog' className={({ isActive }) => isActive ? Classes.active : undefined} >Blog</NavLink></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;