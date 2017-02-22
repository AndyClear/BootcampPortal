import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import './App.css';

class App extends Component {

style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

   constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
       <AppBar title="BootCamp Portal" iconClassNameRight="muidocs-icon-navigation-expand-more" onClick={this.handleToggle}></AppBar>
        <div className="App">
          <div className="App-header">
          <div>
          <Drawer
            docked={false}
            width={200}
            open={this.state.open} 
            onRequestChange={(open) => this.setState({open})} >
            <AppBar title="Menu" showMenuIconButton={false} onTouchTap={this.handleToggle} />
            <MenuItem><Link to="/dashboard">Dashboard</Link></MenuItem>
            <MenuItem><Link to="/login">Login</Link></MenuItem>
          </Drawer>
          {this.props.children}
          </div>
      </div>
      </div>
      
      </div>
    );
  }
}

export default App;
