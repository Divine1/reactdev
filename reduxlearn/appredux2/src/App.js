import React, { Component } from 'react';
import Counter from './component/Counter';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Counter />
        </header>
      </div>
    );
  }
}

export default App;
