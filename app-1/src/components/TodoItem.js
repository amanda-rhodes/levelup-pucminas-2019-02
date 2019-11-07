import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  changeStyle = () => { 
    return {
      textDecoration: this.props.tarefa.completed ? "line-through" : "none"
    }
    // if (this.props.tarefa.completed) { // o if assim já valida se está verdadeiro ou falso
    //   return { textDecoration: "line-through" }
    // } else {
    //   return { textDecoration: "none"  }
    // }
  }

  render() {
    const { id, title } = this.props.tarefa;
    return (
      <div style={this.changeStyle()}>
        <h5> 
          <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)}>
          </input> 
          {title} 
          </h5>
      </div>
    )
  }
}

TodoItem.propTypes = {
  tarefa: PropTypes.object.isRequired
}

export default TodoItem;
