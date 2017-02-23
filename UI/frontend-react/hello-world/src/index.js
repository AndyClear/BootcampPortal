import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './login';
import Dashboard from './dashboard';
import Attendee from './Attendee';
import { Router, Route, browserHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';


ReactDOM.render((
    <MuiThemeProvider>
        <Router history={browserHistory}>
           <Route path="/" component={App}>
           <Route path="dashboard" component={Dashboard}/>
           <Route path="Attendee" component={Attendee}/>
               <Route path="login" component={Login}>
                        {/*<Route path="/user/:userId" component={User}/>*/}
               </Route>
           </Route>
        </Router>
    </MuiThemeProvider>
), document.getElementById('root'))


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
