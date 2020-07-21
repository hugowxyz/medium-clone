import React from 'react';
import { Link } from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-light">
        <div className="container">
          <div className="nav-brand"><Link to='/'>Medium</Link></div>
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
              <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                @hugo
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <Link to="/"><button className="dropdown-item"><strong>hugo</strong></button></Link>
                <Link to="/"><button className="dropdown-item"><span className="text-muted">@phanhuyhugo</span></button></Link>
                <Link to="/"><button className="dropdown-item"><span className="green">Become a member</span></button></Link>
                <hr/>
                <Link to="/new-story"><button className="dropdown-item">New story</button></Link>
                <Link to="/"><button className="dropdown-item">Stories</button></Link>
                <Link to="/"><button className="dropdown-item">Series</button></Link>
                <Link to="/"><button className="dropdown-item">Stats</button></Link>
                <hr/>
                <Link to="/"><button className="dropdown-item mb-2">Sign out</button></Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;