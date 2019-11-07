import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [
        {
          id: 1,
          title: "Ir à academia",
          completed: false,
        },
        {
          id: 2,
          title: "Tomar café",
          completed: false,
        },
        {
          id: 3,
          title: "Passear com o cachorro",
          completed: false,
        },
        {
          id: 4,
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

  render() {
    return (
      <div>
        <h3 className="App-header">Arquivo App.js</h3>
        <Todo tarefas={this.state.tarefas} markCompletedNoApp={this.markCompletedNoApp} />
      </div>
    )
  }
}

export default App;