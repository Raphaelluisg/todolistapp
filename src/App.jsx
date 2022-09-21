import React, { Component } from 'react';
import Todolist from './components/Todolist/Todolist';
import Home from './components/Home/Home';


class App extends Component {
  constructor() {
    super()

    this.state = {};
  }

  render() {
    return (
      <>
        <Home />
        <Todolist />
      </>
    );
  }
}

export default App;
