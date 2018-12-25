import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager"/>
        <Contact name="John Doe" email="jdoe@test.com" phone="444-555-444-555"/>
        <Contact name="Karen Doe" email="kdoe@test.com" phone="444-555-666-555"/>
      </div>
    );
  }
}

export default App;
