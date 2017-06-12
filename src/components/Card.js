import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom';
//above?

export default class Card extends React.Component {
  constructor(props){
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
      <CSSTransitionGroup
      component="div"
      className=""
      transitionName="page-title-animation"
      transitionEnter={true}
      transitionEnterTimeout={500}
      transitionLeave={true}
      transitionLeaveTimeout={500}
      transitionAppear={true}
      transitionAppearTimeout={500}
      >
        <div className="card about">
          <div className="card-upper-section">
            {this.props.icon}
            <h3 className="card-headline">{this.props.title}</h3>
          </div>
          <div className="card-lower-section">
            <h5>{this.props.subheadline}</h5>
            <p>{this.props.text}</p>
          </div>

        </div>
    </CSSTransitionGroup>

    )
  }
}
