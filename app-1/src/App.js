import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
// import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [

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
    const { tarefas } = this.state;
    this.setState({
      tarefas: tarefas.filter(task => task.id !== id)
    })
  }


  addTodoNoApp = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', { title: title, completed: false })
      .then(resposta => {
        this.setState({
          tarefas: [...this.state.tarefas, resposta.data]
        })
      });


  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(resposta => {
        this.setState({ tarefas: resposta.data })
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <div className="App-container">
                <AddTodo
                  addTodo={this.addTodoNoApp}
                />
                <Todo
                  removeTodoNoApp={this.removeTodoNoApp}
                  tarefas={this.state.tarefas}
                  markCompletedNoApp={this.markCompletedNoApp}
                />
              </div>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App;