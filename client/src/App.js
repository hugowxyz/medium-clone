import React from 'react';

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import './custom.scss'

import Navbar from './components/Navigation/Navbar'
import Scrollbar from './components/Navigation/Scrollbar'
import Featured from './components/Featured'
import Main from './components/Main'

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path='/new-story'>
          <div className="temp">
            <div className="container">
              <h1>Hello, World</h1>
            </div>
          </div>
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