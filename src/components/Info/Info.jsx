import { Component } from "react";

export default class Info extends Component {
  countCompleted = () => {
    let completed = 0;
    
    this.props.list.forEach((task) => {
      if (task.completed) completed++;
    });

    return completed;
  };
  
  render() {
    return <p>Всього задач: {this.props.list.length} | Виконано: {this.countCompleted()}</p>;
  }
}