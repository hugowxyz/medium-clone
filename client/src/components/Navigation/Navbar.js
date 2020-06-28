import React from 'react';

import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-light">
        <div className="container">
          <a className="navbar-brand tt"><Link to='/'>Medium</Link></a>
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
              <div className="dropdown">
                <button className="user-profile" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <div className="row">
                    <div className="col-3 d-flex" style={{textAlign: "center", margin: 0}}>
                      <div className="user-profile" style={{marginLeft: "15px"}}></div>
                    </div>
                    <div className="col-9">
                      <div className="username"><strong>hugo</strong></div>
                      <div className="text-muted">@phanhuyhugo</div>
                    </div>
                  </div>
                  <p className="mt-2"><a href="" className='green' style={{fontSize: '14px'}}>Become a member</a></p>
                  <Link to='/new-story'>New story</Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar