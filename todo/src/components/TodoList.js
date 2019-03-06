import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';

class TodoList extends React.Component {
    state = {
        todo: {
            heading: '',
            description: '',
            completed: false
        }
    }

    handleChange = e => {
        this.setState({
            todo: {
                ...this.state.todo,
                [e.target.name]: e.target.value
            }
        });
    }

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({
            todo: {
                heading:'',
                description: '',
                completed: false
            }
        });
    }

    toggleTodo = (e, id) => {
        e.preventDefault();
        this.props.toggleTodo(id);
    }

    render() {
        return(
            <div className="todo-list">
                <form onSubmit={this.addTodo}>
                    <input
                        type="text"
                        placeholder="Add ToDo heading"
                        name="heading"
                        value={this.state.todo.heading}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        placeholder="Add ToDo description"
                        name="description"
                        value={this.state.todo.description}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
                
                {this.props.todos.map(todo => (
                    <div className="todo" key={todo.id}>
                        <h4>{todo.heading}</h4>
                        <p>{todo.description}</p>
                        <button onClick={e => this.toggleTodo(e, todo.id)}>Check</button>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps, { addTodo, toggleTodo })(TodoList);