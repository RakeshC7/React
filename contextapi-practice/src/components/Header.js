import React from 'react';
import './Header.css'
import { useThemeContext } from '../store/ThemeContext';

function Header() {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <header className={`header ${theme}`}>
            <h1>Website Theme Switcher</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </header>
    );
}

export default Header;