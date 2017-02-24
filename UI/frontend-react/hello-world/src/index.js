import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

import Login from './login';
import Dashboard from './dashboard';
import Attendee from './Attendee';
import Locations from './locations';
import Feedback from './Feedback';

import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';


ReactDOM.render((
    <MuiThemeProvider>
        <Provider store={store}>
            <Router history={browserHistory}>
               <Route path="/" component={App}>
               <IndexRoute component={Dashboard}/>
               <Route path="Dashboard" component={Dashboard}/>
               <Route path="Attendee" component={Attendee}/>
               <Route path="Feedback" component={Feedback}/>
               <Route path="locations" component={Locations}/>
                <Route path="login" component={Login}>
                            {/*<Route path="/user/:userId" component={User}/>*/}
                   </Route>
               </Route>
            </Router>
        </Provider>
    </MuiThemeProvider>
), document.getElementById('root'))


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
