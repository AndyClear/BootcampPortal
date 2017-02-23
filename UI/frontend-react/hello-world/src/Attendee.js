/**
 * Created by AHINDE on 21/02/2017.
 */
import React from 'react';
//import MobileTearSheet from '../../../MobileTearSheet';
import {List,ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {  pinkA200, transparent} from 'material-ui/styles/colors';
import './App.css';

class Attendee extends React.Component {
        render() {
            return ( <div className="attendee">
                <h1> Attendees </h1>

              <List >
                <ListItem primaryText="Chelsea Otakan"
                leftIcon={< ActionGrade color={
                        pinkA200
                    }
                    />}
                    rightAvatar={< Avatar src="http://www.material-ui.com/images/chexee-128.jpg" / >
                    }
                    />
                    <ListItem
                    primaryText="Eric Hoffman"
                    insetChildren={
                        true
                    }
                    rightAvatar={ < Avatar src="http://www.material-ui.com/images/kolage-128.jpg" / >
                    }
                    />
                    <ListItem
                    primaryText="James Anderson"
                    insetChildren={
                        true
                    }
                    rightAvatar={ < Avatar src="http://www.material-ui.com/images/jsa-128.jpg" / >
                    }
                    />
                    <ListItem
                    primaryText="Kerem Suer"
                    insetChildren={
                        true
                    }
                    rightAvatar={< Avatar src="http://www.material-ui.com/images/kerem-128.jpg" / >
                    }
                    />
                    </List>
                    <Divider inset={
                        true
                    }
                    />
                    <List >

                    <ListItem
                    primaryText="Adelle Charles"
                    leftAvatar={ <
                        Avatar
                        color={
                            pinkA200
                        }
                        backgroundColor={
                            transparent
                        }
                        style={
                            {
                                left: 8
                            }
                        }>
                        A<
                        /Avatar>
                    }
                    rightAvatar={< Avatar src="http://www.material-ui.com/images/adellecharles-128.jpg" / >
                    }
                    />
                    <ListItem
                    primaryText="Adham Dannaway"
                    insetChildren={
                        true
                    }
                    rightAvatar={<Avatar src="http://www.material-ui.com/images/adhamdannaway-128.jpg" / >
                    }
                    />
                    <ListItem
                    primaryText="Allison Grayce"
                    insetChildren={
                        true
                    }
                    rightAvatar={< Avatar src="http://www.material-ui.com/images/allisongrayce-128.jpg" / >
                    }
                    />
                    <ListItem
                    primaryText="Angel Ceballos"
                    insetChildren={
                        true
                    }
                    rightAvatar={<Avatar src="http://www.material-ui.com/images/angelceballos-128.jpg" / >
                    }
                    />
                    </List>

                    </div>
                )
            }
        }

export default Attendee;
