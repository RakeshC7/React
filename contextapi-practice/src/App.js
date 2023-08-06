import React from 'react';
import { ThemeProvider } from './store/ThemeContext';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;