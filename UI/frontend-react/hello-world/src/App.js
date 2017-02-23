import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to BOOTCAMP YEAH!!</h2>
        </div>
          <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/Attendee">Attendee</Link></li>
          </ul>

          {this.props.children}
      </div>
    );
  }
}

export default App;
