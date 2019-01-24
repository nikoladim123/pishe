import React, { Component } from 'react';
import Location from './components/Location.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <Location />
        </header>
      </div>
    );
  }
}

export default App;
