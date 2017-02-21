import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory} from 'react-router'
import './index.css';

class Dashboard extends React.Component {
    render() {
        return <h1>Dashboard</h1>
    }
}

class Login extends React.Component {
    render() {
        return <h1>Login</h1>
    }
}
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="dashboard" component={Dashboard}/>
            <Route path="login" component={Login}>
                {/*<Route path="/user/:userId" component={User}/>*/}
            </Route>
        </Route>
    </Router>
), document.getElementById('root'))


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

