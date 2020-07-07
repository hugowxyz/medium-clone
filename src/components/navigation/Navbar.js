import React from 'react';

import './Navbar.scss'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-light">
        <div className="container">
          <div className="nav-brand">Medium</div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <button className="link"><i className="icon fas fa-search"></i></button>
              </li>
              <li className="nav-item">
                <button className="link"><i className="icon far fa-bookmark"></i></button>
              </li>
              <li className="nav-item">
                <button className="link"><i className="icon far fa-bell"></i></button>
              </li>
              <li className="nav-item">
                <button className="btn upgrade-button d-none d-lg-block">Upgrade</button>
              </li>
            </ul>
            <div className="dropdown">
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;