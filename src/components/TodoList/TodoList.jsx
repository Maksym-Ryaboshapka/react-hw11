import { Component } from "react";
import Task from "../Todo/Task";

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((task) => {
          return (
            <li key={task.id}>
              <Task
                text={task.text}
                completed={task.completed}
                onCheck={this.props.onCheck}
                id={task.id}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
