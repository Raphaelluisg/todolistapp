import React, { Component } from 'react'

export default class Todolist extends Component {

    constructor() {
        super();

        this.state = {
            title: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({title: event.target.value});
    }

    render() {
        const { title } = this.state;
        return (
            <form>
                <input className="todo-input" type="text" placeholder="Add a todo" onChange={this.handleChange} value={title} />
                <button className="todo-button" type="submit">Add Task</button>
            </form>
        );
    }
}
