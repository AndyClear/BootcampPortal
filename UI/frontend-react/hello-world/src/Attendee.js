
import React from 'react';
import {List,ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {  pinkA200, transparent} from 'material-ui/styles/colors';
import './Attendee.css';

const names = ["Chelsea Otakan","Eric Hoffman", "James Anderson"];
const avatars = ["http://www.material-ui.com/images/chexee-128.jpg", "http://www.material-ui.com/images/kolage-128.jpg", "http://www.material-ui.com/images/jsa-128.jpg"];

class Attendee extends React.Component {

row = () => {
   var rows = [];
   for (let i = 0; i<names.length; i++) {
       rows.push(<ListItem primaryText={names[i]} rightAvatar={<Avatar src={avatars[i]} />}/>);
   }
   return rows;
}
        render() {
            return (
              <div>
                <h1 >Atendee< /h1>
                  <tbody>
                    {this.row()}  
                  </tbody>
               </div>
                )
            }
        }


      
export default Attendee;
