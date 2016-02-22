import React, { Component } from 'react';

export default class ListCreator extends Component {
  constructor() {
    super();

    this.state = { list: ['french bread', 'yogurt', 'granola', 'toothpaste'] };
  }

  render() {
    return (
      <div>
        {this.state.list.map((item, index) =>
          <li key={index}><h3>{item}</h3></li>
        )}
      </div>
    );
  }
}
