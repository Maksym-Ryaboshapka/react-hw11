import { Component } from "react";

export default class Filter extends Component {
  render() {
    return <input type="text" onInput={(e) => this.props.onInput(e.currentTarget.value)} />;
  }
}