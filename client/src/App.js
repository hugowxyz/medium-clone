import React from 'react';

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
    <div className="app">
      <Navbar />
      <Scrollbar />
      <Featured />
      <Main />
    </div>
  );
};

export default App;