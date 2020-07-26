import React from 'react';

import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'

import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import './custom.scss'

import Navbar from './components/navigation/Navbar'
import Scrollbar from './components/navigation/Scrollbar'

import Homepage from './endpoints/Homepage'
import NewStory from './endpoints/NewStory'
import Stories from './endpoints/Stories'
import Me from './endpoints/Me'

const App = () => {
  return (
    <Router>
      
      <Navbar />

      <Switch>
        
        <Route exact path='/new-story'>
          <NewStory />
        </Route>
        
        <Route path='/me/stories'>
          <Stories />
        </Route>
        
        <Route path='/me/drafts'></Route>
        <Route path='/me/stats'></Route>
        <Route path='/me/list'></Route>
        
        <Route path='/me'>
          <Me />
        </Route>

        <Route path='/'>
          <Scrollbar />      
          <Homepage />
        </Route>

      </Switch>
    </Router>
  );
};

export default App;