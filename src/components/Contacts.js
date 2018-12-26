import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
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
  }

  deleteContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({contacts: newContacts});
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />
        ))}
      </React.Fragment>
    )
  };
};

export default Contacts;
