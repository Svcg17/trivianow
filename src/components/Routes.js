import React, { useState } from 'react';
import { Router, Switch, Route, useHistory } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Trivia from './Trivia/Trivia';
import About from './About/About';
import UserContext from '../context/UserContext';

/**
 * Defines the routes used for navigation 
 * Sets a history prop across all routes and their components
 * Sets a UserContext provider on the /trivia route and its components
*/
const Routes = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  return (
    <Router history={history}>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={About} />
            <Route exact path='/trivia' component={Trivia} />
        </Switch>
      </UserContext.Provider>
    </Router>
  )
}

export default Routes;
