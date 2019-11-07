import React, { Component } from 'react';

export class AddTodo extends Component {

  state = {
    title: "",
  }

  changeInput = (evento) => {
    // console.log(evento.target.value)
    this.setState({ title: evento.target.value });
    // console.log(this.state.title);
  }

  onSubmitForm = (evento) => {
    evento.preventDefault(); // evita que dê reload, já que o React tem isso automático
    this.props.addTodo(this.state.title);
    this.setState({title: ""});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm} >
          <input
            type="text"
            name="newTask"
            value={this.state.title}
            placeholder="Nova tarefa"
            onChange={this.changeInput}
            className="App-input"
          ></input>
          <button
            className="App-button"
          >Adicionar</button>
        </form>
      </div>
    )
  }
}

export default AddTodo;
