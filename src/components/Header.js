import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
      <nav className="outer-nav">
        <NavLink className="logo-cont" exact to="/">
          <img src={"../images/WB-white.svg"} className="header-icon" alt={"placeholder"} />
        </NavLink>
        <div className="nav-cont">
          <NavLink to="/about" id="about-nav-link" className="nav-link two">about</NavLink>
          <NavLink to="/webdev" id="webdev-nav-link" className="nav-link three">web dev</NavLink>
          <NavLink to="/writing" id="writing-nav-link" className="nav-link four">writing</NavLink>
        </div>
      </nav>
);

export default Header;
