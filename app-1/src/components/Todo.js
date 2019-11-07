import React, { Component } from 'react';
import TodoItem from './TodoItem';

export class Todo extends Component {
  removeTodo = () => {
    return console.log("Teste");
  }

  render() {
    const tasks = this.props.tarefas.map(arrayItem =>
      <TodoItem
        key={arrayItem.id}
        tarefa={arrayItem}
        removeTodo={this.props.removeTodo}
        markCompleted={this.props.markCompletedNoApp}
      />
    )
    return (
      <div>
        {tasks}
      </div>
    )
  }
}

export default Todo;