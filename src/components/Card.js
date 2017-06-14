import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Card extends React.Component {
  constructor(props){
    super(props);
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
        <div className="card-inner-link card about">
          <Link to={this.props.link} >
          <div className="card-upper-section">
            {this.props.icon}
            <h3 className="card-headline">{this.props.title}</h3>
          </div>
          </Link>
          {this.props.children}
          <Link className="card-inner-link" to={this.props.link} >
          <div className="card-lower-section">
            <h5>{this.props.subheadline}</h5>
            <p>{this.props.text}</p>
          </div>
          </Link>
        </div>
    </CSSTransitionGroup>

    )
  }
}
