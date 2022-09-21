import React, { Component } from 'react';
import idLibrary from '../idLibrary/idLibrary';

export default class Todolist extends Component {

    constructor() {
        super();

        this.initialState = {
            id: 0,
            title: '',
        };

        this.state = this.initialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { randomId } = idLibrary;
        this.setState({
            id: randomId(9999),
            title: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { onCreate } = this.props;
        const { id } = this.state;
        if (id > 0) {
            onCreate(this.state);
            this.setState(this.initialState);
        }
    }

    render() {
        const { title } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input className="todo-input" type="text" placeholder="Add a todo" onChange={this.handleChange} value={title} />
                <button className="todo-button" type="submit">Add Task</button>
            </form>
        );
    }
}
