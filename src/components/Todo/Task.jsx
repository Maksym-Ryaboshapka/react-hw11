import { Component } from "react";

export default class Task extends Component {
  render() {
    return (
      <>
        <input
          type="checkbox"
          checked={this.props.completed}
          onChange={() => {
            this.props.onCheck(this.props.id);
          }}
        />
        <p style={{ display: "inline" }}>{this.props.text}</p>
      </>
    );
  }
}
