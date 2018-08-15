import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './Home';
import Admin from './Admin/Admin';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/admin" exact component={Admin}/>
        </Switch>
    </Router>
);