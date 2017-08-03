import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import Hospitals from './Hospitals';
import Patients from './Patients';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/hospitals" component={Hospitals}/>
        <Route exact path="/hospitals/:hID/patients" component={Patients}/>
      </div>
    </div>
  </Router>
)

export default App;
