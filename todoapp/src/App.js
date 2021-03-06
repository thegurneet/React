import React,{Component} from 'react';
import Todos from './Components/Todo';
import AddTodo from './Components/AddTodo';

class App extends Component { 

  state = { 
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodo = (id) => { 
    const todos = this.state.todos.filter(todo => {
      return todo.id !==id
    });

    this.setState({
      todos: todos
    })

  }

  addTodo = (todo) => { 
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
          todos: todos
        })
  }

  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <AddTodo addTodo={this.addTodo}></AddTodo>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
      </div>
    );
  }
}

export default App;
