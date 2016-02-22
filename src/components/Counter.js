import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();

    this.state = { count: 0 };

    this.onDecrement = this.onDecrement.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onDecrement() {
    this.setState({ count: this.state.count - 1 });
  }

  onIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  onReset() {
    this.setState({ count: 0 });
  }

  render () {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={this.onDecrement}>Down</button>
        <button onClick={this.onIncrement}>Up</button>
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}
