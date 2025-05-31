import { Component } from "react";

export default class TodoEditor extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = form.elements.text.value;

    if (text !== "") {
      this.props.addTask({
        id: Date.now(),
        text: text,
        completed: false,
      });
    }

    form.reset();
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <input type="text" name="text" />
        <button type="submit">Додати</button>
      </form>
    );
  }
}
