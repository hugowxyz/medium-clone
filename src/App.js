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
import NewStory from './endpoints/NewStory'

const App = () => {
  return (
    <Router>
      <Switch>
        
        <Route path='/new-story'>
          <NewStory />
        </Route>

        <Route path='/me/stories'></Route>
        <Route path='/me/drafts'></Route>
        <Route path='/me/stats'></Route>
        <Route path='/me/list'></Route>
        <Route path='/me'></Route>

        <Route path='/'>
          <Homepage />
        </Route>

      </Switch>
    </Router>
  );
};

export default App;