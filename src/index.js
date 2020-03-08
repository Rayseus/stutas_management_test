import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history';
import Manager from './main_page';
import CreateStatus from './status_create'
import UpdateStatus from './status_update'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<CreateStatus />, document.getElementById('root'));
const history = createBrowserHistory();
ReactDOM.render(
    <Router history={history}>
            <Route path="/main" component={Manager} />
            <Route path="/create" component={CreateStatus} />
            <Route path="/update" component={UpdateStatus} />
    </Router>, document.getElementById('root'));


// ReactDOM.render(
//     <HashRouter>
//         <Switch>
//             <Route exact path='/' component={Status}/>
//             <Route exact path='/create' component={CreateStatus}/>
//         </Switch>   
//     </HashRouter>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
