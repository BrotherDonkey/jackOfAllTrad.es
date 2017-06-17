import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <li className="sub-nav-item"><NavLink to={`${match.url}/stack`} >Stack</NavLink></li>
        <li className="sub-nav-item"><NavLink to={`${match.url}/portfolio`} >Portfolio</NavLink></li>
  </CSSTransitionGroup>

);

export default SubNav;


//          <img src={"../images/WB-white.svg"} className="SubNav-icon" alt={"placeholder"} />
