import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

//component imports
import PageTitle from './PageTitle';
import Card from './Card';
import SubNav from './SubNav';

//svg components
import Bear2svg from './svg-components/Bear2svg';
import BrowserSVG from './svg-components/BrowserSVG';
import BookshelfSVG from './svg-components/BookshelfSVG';



export default class WebDev extends Component {
  render() {
    return (

      <div className="main-content">
        <PageTitle
          icon={<Bear2svg className="page-icon" height="100" width="100" />}
          title="Web Dev" />

        <CSSTransitionGroup
            component="div"
            className="page-summary"
            transitionName="page-title-animation"
            transitionEnter={true}
            transitionEnterTimeout={500}
            transitionLeave={true}
            transitionLeaveTimeout={500}
            transitionAppear={true}
            transitionAppearTimeout={500}>
        </CSSTransitionGroup>


      </div>
    );
  }
}
