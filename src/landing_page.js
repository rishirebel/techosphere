import React, { Component } from 'react';
import logo from './techosphere.in.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Techosphere.in
          </p>
          <p>
            The environment is under construction.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Techosphere.in
          </a>
        </header>
      </div>
    );
  }
}

export default App;
