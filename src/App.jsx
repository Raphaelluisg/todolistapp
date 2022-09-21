import React, { Component } from 'react';
import Todolist from './components/Todolist/Todolist';
import Home from './components/Home/Home';


class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: [],
    };

    this.createTodolist = this.createTodolist.bind(this);
  }

  createTodolist(newTodo) {
    const { tasks } = this.state;
    this.setState({ 
      tasks: [...tasks, newTodo], 
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <>
        <Home />
        <Todolist onCreate={this.createTodolist} />
          <ul>
            { tasks.map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
      </>
    );
  }
}

export default App;
