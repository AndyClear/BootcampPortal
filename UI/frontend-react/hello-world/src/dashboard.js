import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {List,ListItem} from 'material-ui/List';

class Dashboard extends React.Component {


  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


 render() {
    const ret = [];
    const timeList = ["09:30", "12:15", "13:15", "17:00"];
    const itemList = ["Introduction to Microservices. Location: Code Node", "Lunch", "Practical session: using docker", "Day 1 finish"]

      const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onClick={this.handleClose}
      />
    ];   
    for (let i = 0; i < timeList.length; i++) {
        ret[i] = <ListItem><a onClick={this.handleOpen} >{" " + timeList[i] + " - " + itemList[i]}</a></ListItem> //add api item 
    }


  return (
  <div>
    <div>
      <h2>Welcome to the Devops Bootcamp Portal!</h2>
        <p>For all of your DevOps Bootcamp queries. Access all pages from the top-left corner of the page.</p>
    </div>
      <h3>Schedule:</h3>
      <div>
        <ul>
        {ret}
        </ul>
      </div>
      <div>
        <Dialog
          title="Title"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
  </div>
  )
}
}

export default Dashboard;