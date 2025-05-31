import { Component } from "react";
import todoData from "./todo.json";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import Filter from "./components/Filter/Filter";
import Info from "./components/Info/Info";
import TodoList from "./components/TodoList/TodoList";

let initalTodos = [...todoData];

export default class App extends Component {
  state = {
    todos: initalTodos,
    filter: "",
  };

  addTask = (newTask) => {
    this.setState(
      (prevState) => ({
        todos: [...prevState.todos, newTask],
      }),
      () => (initalTodos = [...this.state.todos])
    );
  };

  onCheck = (id) => {
    this.setState(
      (prevState) => ({
        todos: prevState.todos.map((task) => {
          return task.id === id
            ? { ...task, completed: !task.completed }
            : task;
        }),
      }),
      () => (initalTodos = [...this.state.todos])
    );
  };

  onInput = (value) => {
    if (value !== "") {
      this.setState((prevState) => ({
        todos: prevState.todos.filter((task) =>
          task.text.toLowerCase().includes(value.toLowerCase())
        ),
      }));
    } else {
      this.setState({ todos: initalTodos });
    }
  };

  render() {
    return (
      <div className="App">
        <TodoEditor addTask={this.addTask} />
        <Filter onInput={this.onInput} />
        <Info list={this.state.todos} />
        <TodoList todos={this.state.todos} onCheck={this.onCheck} />
      </div>
    );
  }
}
