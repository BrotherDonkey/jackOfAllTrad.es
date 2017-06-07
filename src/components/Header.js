import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from './Box';

const Header = () => (
      <nav className="outer-nav">
        <NavLink className="logo-cont" exact to="/">
          <h2 className="site-name">w.b. bjorn</h2>
        </NavLink>
        <div className="nav-cont">
          <NavLink to="/about" id="about-nav-link" className="nav-link two">
            <Box linkName="about" />
          </NavLink>
          <NavLink to="/webdev" id="webdev-nav-link" className="nav-link three">
            <Box linkName="web dev" />
          </NavLink>
          <NavLink to="/writing" id="writing-nav-link" className="nav-link four">
            <Box linkName="writing" />
          </NavLink>
        </div>
      </nav>
);

export default Header;


//          <img src={"../images/WB-white.svg"} className="header-icon" alt={"placeholder"} />
