import React from 'react';
import {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

//component exports
import Bear2svg from './svg-components/Bear2svg.js';


export default class PageTitle extends React.Component {
  constructor(props){
    super(props);
  }
  render(){

  return (
    <CSSTransitionGroup
      component="div"
      className="page-title-cont"
      transitionName="page-title-animation"
      transitionEnter={true}
      transitionEnterTimeout={500}
      transitionLeave={true}
      transitionLeaveTimeout={500}
      transitionAppear={true}
      transitionAppearTimeout={500}
      >
        {this.props.icon}
        <h3> {this.props.title} </h3>
    </CSSTransitionGroup>
  )
  }
}
