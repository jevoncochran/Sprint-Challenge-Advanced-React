import React from 'react';
import { useDarkMode } from "./custom hooks/useDarkMode";
import logo from './logo.svg';
import './App.css';

import Players from "./components/Players";

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  return (
    <div className="App">
      {!darkMode && <button onClick={() => setDarkMode(true)}>Dark Mode</button>}
      {darkMode && <button onClick={() => setDarkMode(false)}>Light Mode</button>}
      <Players />
    </div>
  );
}

export default App;

