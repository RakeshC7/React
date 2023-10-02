import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import dataContext from './context/dataContext.jsx';
import { rowData } from './data/appData'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <dataContext.Provider value={rowData}>
      <App />
    </dataContext.Provider>
  </React.StrictMode>,
)
