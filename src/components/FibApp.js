import React, { Component } from 'react';
import '../styles/FibApp.css';
import Header from './Header';
import Home from './Home';

class FibApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default FibApp;
