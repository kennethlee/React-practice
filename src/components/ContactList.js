import React, { Component } from 'react';
import Chance from 'chance';

export default class ContactList extends Component {
  constructor() {
    super();

    const contacts = [];

    for (let i = 0; i < 20; i++) {
      contacts.push({
        name: chance.name(),
        address: chance.address({ short_suffix: true }),
        city: chance.city(),
        country: chance.country(),
        postalCode: chance.zip(),
        phone: chance.phone(),
        email: chance.email(),
      });
    }

    this.state = { contacts };

    this.onUserClick = this.onUserClick.bind(this);
  }

  /*
   * this code is duplicated in the constructor; must DRY up later.
   */
  onUserClick() {
    const contacts = [];

    for (let i = 0; i < 20; i++) {
      contacts.push({
        name: chance.name(),
        address: chance.address({ short_suffix: true }),
        city: chance.city(),
        country: chance.country(),
        postalCode: chance.zip(),
        phone: chance.phone(),
        email: chance.email(),
      });
    }
    this.setState({contacts});
  }

  render() {
    return (
      <div>
        <button onClick={this.onUserClick}>Next</button>
        {this.state.contacts.map((contact, index) =>
          <ul key={index} className="ContactsList">
            <li><b>{contact.name}</b></li>
            <li>Address: {contact.address}, {contact.city}
              , {contact.country} {contact.postalCode}
            </li>
            <li>Phone: {contact.phone}</li>
            <li>Email: {contact.email}</li>
          </ul>
        )}
        <button onClick={this.onUserClick}>Next</button>
      </div>
    );
  }
}
