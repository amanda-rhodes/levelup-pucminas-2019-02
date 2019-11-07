import React, { Component } from 'react';
import TodoItem from './TodoItem';

export class Todo extends Component {
  render() {
    const tasks = this.props.tarefas.map(arrayItem => 
        <TodoItem key={arrayItem.id} tarefa={arrayItem} markCompleted={this.props.markCompletedNoApp} />
      )
    return (
      <div>
        {tasks}
      </div>
    )
  }
}

export default Todo;