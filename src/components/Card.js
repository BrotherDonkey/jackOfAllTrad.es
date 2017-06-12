import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

//components
import SvgFlexContainer from './SvgFlexContainer';
import BookshelfSVG from './svg-components/BookshelfSVG';




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
            <SvgFlexContainer>
              <BookshelfSVG height="100" width="100" className="svg-icon"/>
              <BookshelfSVG height="100" width="100" className="svg-icon"/>
              <BookshelfSVG height="100" width="100" className="svg-icon"/>
              <BookshelfSVG height="100" width="100" className="svg-icon"/>
              <BookshelfSVG height="100" width="100" className="svg-icon"/>
            </SvgFlexContainer>
            <h5>{this.props.subheadline}</h5>
            <p>{this.props.text}</p>
          </div>

        </div>
    </CSSTransitionGroup>

    )
  }
}
