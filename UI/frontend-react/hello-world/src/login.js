import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import ActionFace from 'material-ui/svg-icons/action/face'
import './login.css';

const style = {
    margin: 12,
}

class Login extends React.Component {

    render() {
        return (
        <div className="LoginContainer">
        <h1>Login</h1>
            <TextField hintText="Username"  />
            <br/>
            <TextField hintText="Password" type="password" />
            <br />
            <RaisedButton label="Login" default style={style} />
        </div>
    )

    }
}

export default Login;
