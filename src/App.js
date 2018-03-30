import React, { Component } from 'react';
import Counter from './components/Counter';
import Calculator from './components/Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Calculator/>
          {/*<Counter/>*/}
      </div>
    );
  }
}

export default App;
