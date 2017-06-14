import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'

//take propsArray (create One for Testing purposes) then map it to become something like <li class="sub-nav-item"><NavLink className="logo-cont" exact to="/"></NavLink></li>
//then return the string below

const SubNav = ({match}, props) => (
  <CSSTransitionGroup
      component="ul"
      className="sub-nav-cont"
      transitionName="sub-nav-animation"
      transitionEnter={true}
      transitionEnterTimeout={500}
      transitionLeave={true}
      transitionLeaveTimeout={500}
      transitionAppear={true}
      transitionAppearTimeout={500}>
        <li><NavLink to={`${match.url}/javascript`} className="sub-nav-item">JavaScript</NavLink></li>
        <li><NavLink to={`${match.url}/webdesign`} className="sub-nav-item">Web Design</NavLink></li>
        <li><NavLink to={`${match.url}/portfolio`} className="sub-nav-item">Portfolio</NavLink></li>
  </CSSTransitionGroup>

);

export default SubNav;


//          <img src={"../images/WB-white.svg"} className="SubNav-icon" alt={"placeholder"} />
