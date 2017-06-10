import React from 'react';
import { NavLink } from 'react-router-dom';
import { Spring } from 'react-motion'

//import components
import BouncyTitle from './BouncyTitle';
import Box from './Box';


const Header = () => (
      <nav className="outer-nav">
          <BouncyTitle title={"w.b.bjorn"} />
        <div className="nav-cont">
          <NavLink to="/about" id="about-nav-link" className="nav-link two">
            About
          </NavLink>
          <NavLink to="/webdev" id="webdev-nav-link" className="nav-link three">
            WebDev
          </NavLink>
          <NavLink to="/writing" id="writing-nav-link" className="nav-link four">
            Writing
          </NavLink>
        </div>
      </nav>
);

export default Header;



// <NavLink className="logo-cont" exact to="/">
//   <h2 className="site-name">w.b. bjorn</h2>
// </NavLink>


//          <img src={"../images/WB-white.svg"} className="header-icon" alt={"placeholder"} />
