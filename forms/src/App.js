import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BasicValidation from './components/basic-validation'

class App extends Component {
  render() {
    return (
      <div className="App">
      <BasicValidation />
      </div>
    );
  }
}

export default App;
