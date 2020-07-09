import React from 'react';

import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'

import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import './custom.scss'

import Homepage from './endpoints/Homepage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/new-story'></Route>
        <Route path='/me/stories'></Route>
        <Route path='/me/drafts'></Route>
        <Route path='/me/stats'></Route>
        <Route path='/me/list'></Route>
        <Route path='/me'></Route>
        <Route exact path='/'>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;