import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import themeContext from './context/themeContext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <themeContext.Provider value={{ theme, setTheme }}>
    <App />
  </themeContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
