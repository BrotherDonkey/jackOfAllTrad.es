import React, { Component } from 'react';
// import { Route, match } from 'react-router-dom';


// component imports
import { CSSTransitionGroup } from 'react-transition-group'
import PageTitle from './PageTitle';

//svg component imports
import BookshelfSVG from './svg-components/BookshelfSVG'

export default class Writing extends Component {
  constructor(){
    super();
    this.state = {
      title: "Writing",
    }
  }
  render() {
    return (
      <div className="main-content">
        <PageTitle
          icon={<BookshelfSVG className="page-icon" height="75" width="75" />}
          title={this.state.title} />

        <CSSTransitionGroup
            component="div"
            className="page-summary-transition"
            transitionName="page-title-animation"
            transitionEnter={true}
            transitionEnterTimeout={500}
            transitionLeave={true}
            transitionLeaveTimeout={500}
            transitionAppear={true}
            transitionAppearTimeout={500}>
            <div className="writing-cont">
              <p>In addition to being a web developer, I am also a former English teacher, shortstoryist, traveller, novelist, and scifi and fantasy aficionado.</p>
              <a className="writing-link" rel="noopener noreferrer" href="http://wbbjorn.com" target="_blank">Read My Novels and Short Stories at wbbjorn.com</a>
              <a className="writing-link" rel="noopener noreferrer" href="https://medium.com/@BrotherDonkey" target="_blank">Find me on Medium</a>
            </div>


        </CSSTransitionGroup>


      </div>
    );
  }
}
