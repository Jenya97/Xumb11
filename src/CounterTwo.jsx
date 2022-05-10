import React, { Component } from "react";

export class CounterOne extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        {this.props.counter}
        <button onMouseMove={this.props.increment}>add</button>
      </div>
    );
  }
}

export default CounterOne;
