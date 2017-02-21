/**
 * Created by AHINDE on 21/02/2017.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

const style = {
    margin: 12,
}

class Login extends React.Component {
    render() {
        return (
        <div><h1>Login</h1>
            <TextField hintText="Username" />
            <br/>
            <TextField hintText="Password" type="password" />
            <br />
            <RaisedButton label="Login" primary={true} style={style} />
        </div>
    )

    }
}

export default Login;
