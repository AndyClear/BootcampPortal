
import React from 'react';
import {List,ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {  pinkA200, transparent} from 'material-ui/styles/colors';
import './Attendee.css';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        data: state.users.data
    }
}


// const names = ["Chelsea Otakan","Eric Hoffman", "James Anderson"];
// const avatars = ["http://www.material-ui.com/images/chexee-128.jpg", "http://www.material-ui.com/images/kolage-128.jpg", "http://www.material-ui.com/images/jsa-128.jpg"];

class Attendee extends React.Component {
        render() {
            // const users = [{name: "al", avatar:"http://www.material-ui.com/images/chexee-128.jpg"}];
            const users = this.props.data
            var rows = [];
            for (let i = 0; i<users.length; i++) {
                const user = users[i]
                rows.push(<ListItem primaryText={user.name} rightAvatar={<Avatar src={user.avatar} />}/>);
            }

            return (
              <div>
                <h1>Attendees</h1>
                  <tbody>
                    {rows}
                  </tbody>
               </div>
                )
            }
        }


const AttendeeExtended = connect(
    mapStateToProps
)(Attendee)

export default AttendeeExtended;
