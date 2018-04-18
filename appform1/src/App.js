import React, { Component } from 'react';

import Input from "./components/UI/Input";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input inputtype= "input" type="text" name="name" placeholder="name" label="Name"/>
        <Input inputtype= "input" type="text" name="planet" placeholder="Planet" label="Planet"/>
        <Input inputtype= "input" type="text" name="city" placeholder="City" label="City"/>
      </div>
    );
  }
}

export default App;
