import React, { Component } from 'react';
import Location from './components/Location.js';
import LogIn from './components/LogIn.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogIn />
        <header>
            <Location />
        </header>
      </div>
    );
  }
}

export default App;
