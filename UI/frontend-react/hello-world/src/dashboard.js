import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {List,ListItem} from 'material-ui/List';
import {Timeline} from 'react-twitter-widgets'
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  console.log(state)
  return {
    data: state.events.data
  }
}

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
    const schedule = this.props.data
    let scheduleItem = [];
    //const schedule = [{time: "09:30", item: "test"}]

    const actions = [
    <FlatButton
    label="OK"
    primary={true}
    onClick={this.handleClose}
    />
    ];  

    for (let i = 0; i < schedule.length; i++) {
      scheduleItem = schedule[i]
      ret.push(<ListItem><a onClick={this.handleOpen} >{" " + scheduleItem.time + " - " + scheduleItem.item}</a></ListItem>);
    }

    return (
    <div>
    <div>
      <h2>Welcome to the Devops Bootcamp Portal!</h2>
        <p>For all of your DevOps Bootcamp queries. Tweet using #devopsBootcamp and leave us a nice comment :).</p>
    </div>
      <h3>Schedule:</h3>
    <div>
      <ul>
        {ret}
      </ul>
    </div>
    <div>
    <Dialog
      title={scheduleItem.title}
      actions={actions}
      modal={false}
      open={this.state.open}
      onRequestClose={this.handleClose}
    >
      {scheduleItem.description}
    </Dialog>
    </div>
    <Timeline
    dataSource={{
      sourceType: 'widget',
      widgetId: '834005652318072833' 

    }}
    options={{
      height: '400', 
      width: '800'
    }}
    onLoad={() => console.log('Timeline is loaded!')}
    />
    </div>
    )
}
}

const DashboardExtended = connect(
  mapStateToProps
  )(Dashboard)

  export default DashboardExtended;