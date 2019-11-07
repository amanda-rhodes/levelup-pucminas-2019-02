import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  changeStyle = () => {
    return {
      textDecoration: this.props.tarefa.completed ? "line-through" : "none"
    }
  }

  btnStyle = () => {
    return {
      background: "rgba(255, 0, 0, 0.8",
      float: "right",
      border: "none",
      borderRadius: "5px",
      color: "white",
      cursor: "pointer",
      margin: "2px"
    }
  }

  render() {
    const { id, title } = this.props.tarefa;
    return (
      <div style={this.changeStyle()}>
        <h6>
          <input
            type="checkbox"
            onChange={this.props.markCompleted.bind(this, id)}
          ></input>
          {title}
          <button
            style={this.btnStyle()}
          // onClick={this.props.removeTodo.bind(this, id)}
          >X</button>
        </h6>
      </div>
    )
  }
}

TodoItem.propTypes = {
  tarefa: PropTypes.object.isRequired
}

export default TodoItem;
