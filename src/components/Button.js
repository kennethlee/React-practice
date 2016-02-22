import React, { Component } from 'react';

/*
 * Color-changing button.
 */

export default class Button extends Component {
  constructor() {
    super();

    this.state = { color: 'blue' };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    switch (this.state.color) {
      case 'blue': this.setState({ color: 'green' });
        break;
      case 'green': this.setState({ color: 'purple' });
        break;
      default: this.setState({ color: 'blue' });
    }
  }

  render() {
    return (
      <button
        onClick={this.onButtonClick}
        className={this.state.color}
        id="button"
      >
        {this.state.color}
      </button>
    );
  }
}
