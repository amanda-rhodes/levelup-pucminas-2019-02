import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [
        {
          id: uuid.v4(),
          title: "Ir à academia",
          completed: false,
        },
        {
          id: uuid.v4(),
          title: "Tomar café",
          completed: false,
        },
        {
          id: uuid.v4(),
          title: "Passear com o cachorro",
          completed: false,
        },
        {
          id: uuid.v4(),
          title: "Ir à PUC Minas",
          completed: false,
        }
      ]
    }
  }

  markCompletedNoApp = (id) => {
    this.setState({
      tarefas: this.state.tarefas.map(itemTarefa => {
        if (itemTarefa.id === id) {
          itemTarefa.completed = !itemTarefa.completed;
        }
        return itemTarefa;
      })
    })
  }

  removeTodoNoApp = (id) => {
    this.setState({
      tarefas: {
        ...this.state.tarefas.filter(
          tarefa => tarefa.id !== id
        )
      }
    })
  }


  addTodoNoApp = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({
      tarefas: [...this.state.tarefas, newTodo]
    })
  }

  render() {
    return (
      <div>
        <h3 className="App-header">Minhas tarefas</h3>
        <div className="App-container">
          <AddTodo
            addTodo = {this.addTodoNoApp}
          />
          <Todo
            removeTodoNoApp={this.removeTodoNoApp}
            tarefas={this.state.tarefas}
            markCompletedNoApp={this.markCompletedNoApp}
          />
        </div>
      </div>
    )
  }
}

export default App;