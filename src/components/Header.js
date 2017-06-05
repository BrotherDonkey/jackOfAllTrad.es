import React from 'react';

const Header = () => (
      <nav className="outer-nav">
        <img src="http://via.placeholder.com/100x100" alt="placeholder" />
        <div className="nav-cont">
          <a href="/" className="nav-link one">Home</a>
          <a href="/about" className="nav-link two">About</a>
          <a href="/webdev" className="nav-link three">WebDev</a>
          <a href="/fiction" className="nav-link four">Fiction</a>
        </div>
      </nav>
);

export default Header;
