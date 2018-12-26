import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@test.com',
        phone: '444-555-444-555'
      },
      {
        id: 2,
        name: 'Karen Smith',
        email: 'ksmith@test.com',
        phone: '555-666-555-666'
      },
      {
        id: 3,
        name: 'Bob Smith',
        email: 'bsmith@test.com',
        phone: '444-666-555-666'
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
