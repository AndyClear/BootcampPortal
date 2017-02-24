import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
//import IconButton from 'material-ui/IconButton';
//import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
//import FlatButton from 'material-ui/FlatButton';
//import FontIcon from 'material-ui/FontIcon';
//import Toggle from 'material-ui/Toggle';
//import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
//import RaisedButton from 'material-ui/RaisedButton';
//import Paper from 'material-ui/Paper';
//import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import ActionFace from 'material-ui/svg-icons/action/face'
//import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import MapsPlace from 'material-ui/svg-icons/maps/place';
import ActionHome from 'material-ui/svg-icons/action/home';
import ContentWeekend from 'material-ui/svg-icons/content/weekend';
import {Link} from 'react-router';
import './App.css';


class App extends Component {

   constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
       <AppBar title="BootCamp Portal" iconClassNameRight="muidocs-icon-navigation-expand-more"  onClick={this.handleToggle}></AppBar>
        <div className="App">
          <div className="App-header">
          <div>
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})} >
            <AppBar title="Menu" showMenuIconButton={false} onClick={this.handleToggle} />
            <MenuItem containerElement={<Link to="/dashboard"/>} leftIcon={<ActionHome />}>Dashboard</MenuItem>
            <MenuItem containerElement={<Link to="/feedback"/>} leftIcon={<ImageEdit />} > Feedback</MenuItem>
            <MenuItem containerElement={<Link to="/locations"/>} leftIcon={<MapsPlace /> }>Locations</MenuItem>
            <MenuItem containerElement={<Link to="/Attendee"/>} leftIcon={<ContentWeekend /> }> Attendees</MenuItem>
            <h5 className="Bottom">&copy; DevOps Bootcamp 2017</h5>
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
