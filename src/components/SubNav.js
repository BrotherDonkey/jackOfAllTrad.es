import React from 'react';
import { NavLink } from 'react-router-dom';
//take propsArray (create One for Testing purposes) then map it to become something like <li class="sub-nav-item"><NavLink className="logo-cont" exact to="/"></NavLink></li>
//then return the string below

const SubNav = (props) => (
    <ul class="sub-nav-ul">
      <li class="sub-nav-item">something</li>
      <li class="sub-nav-item">Something</li>
    </ul>
);

export default SubNav;


//          <img src={"../images/WB-white.svg"} className="SubNav-icon" alt={"placeholder"} />
