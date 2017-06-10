import React from 'react';
// import { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'
// import ReactCSSTransition from 'react-addons-css-transition-group';

class BouncyTitle extends React.Component {
  render(props) {
    return (
      <CSSTransitionGroup
        component="div"
        className="transition"
        transitionName="headline-animation"
        transitionEnter={false}
        transitionLeave={false}
        transitionAppear={true}
        transitionAppearTimeout={1000}
        >
        <h2 className="site-name">{this.props.title}</h2>
      </CSSTransitionGroup>
    )
  }
}

export default BouncyTitle;

//
// return (
//   <Spring
//     defaultValue={500}
//     endValue={100}>
//     { (obj) => {
//         let style={
//             transform: `translate(100px, ${obj}px)`
//       }
//       return <div style={style} className="logo-cont" exact to="/"><h2 className="site-name">w.b. bjorn</h2></div>
//     }}
//   </Spring>
//    )
