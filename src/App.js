import React from 'react';

import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'

import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import './custom.scss'

import Navbar from './components/Navigation/Navbar'
import Scrollbar from './components/Navigation/Scrollbar'
import Featured from './components/Featured'
import Main from './components/Main'

import Create from './components/Pages/Create'

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path='/new-story'>
          <Create />
        </Route>
        <Route path='/'>
          <Scrollbar />
          <Featured />
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;