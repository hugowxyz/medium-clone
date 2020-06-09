import React from 'react';

import './Navbar.css'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-light">
        <div className="container">
          <a className="navbar-brand tt " href="#home">Medium</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home"><i className="fas fa-search"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#home"><i className="far fa-bookmark"></i></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#home"><i className="far fa-bell"></i></a>
              </li>
              <li className="nav-item">
                <a href="#home" className="btn d-none d-lg-block">Upgrade</a>
              </li>
              <div className="user-profile"></div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar