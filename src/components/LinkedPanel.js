import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom';
//above?

export default class LinkedPanel extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }

  update(){
    this.setState({
    });
  }

  render(){
    return (
      <h1>{this.state.name}</h1>
    )
  }
}
