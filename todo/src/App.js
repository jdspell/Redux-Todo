import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        {/* <TodoForm /> */}
        <TodoList />
      </div>
    );
  }
}

export default App;
