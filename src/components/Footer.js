import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
        <footer className="footer">
          <NavLink to="/" className="footer-link">Home</NavLink>
          <NavLink to="/about" className="footer-link">About</NavLink>
          <NavLink to="novels" className="footer-link">Novels</NavLink>
          <NavLink to="/writing" className="footer-link">Writing</NavLink>
        </footer>
);

export default Footer;
