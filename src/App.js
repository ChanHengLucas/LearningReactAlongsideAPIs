import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <h2>React JSON</h2>
      <Home />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
