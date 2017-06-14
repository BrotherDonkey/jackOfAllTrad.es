import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'

//component imports
import PageTitle from './PageTitle';
import Card from './Card';
import SubNav from './SubNav';
import JavaScript from './webdev-components/JavaScript';
import WebDesign from './webdev-components/WebDesign'
import Portfolio from './webdev-components/Portfolio'


//svg components
import Bear2svg from './svg-components/Bear2svg';
import BrowserSVG from './svg-components/BrowserSVG';
import BookshelfSVG from './svg-components/BookshelfSVG';



const WebDev = ({match}) => {
    return (

      <div className="main-content">
        <PageTitle
          icon={<BrowserSVG className="page-icon" height="100" width="100" />}
          title="Web Dev" />
          <SubNav match={match} />

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

          <Route exact path={`${match.path}`} render={() => <Redirect to={`${match.path}/javascript`} />} />
          <Route path={`${match.path}/javascript`} component={JavaScript}/>
          <Route path={`${match.path}/webdesign`} component={WebDesign} />
          <Route path={`${match.path}/portfolio`} component={Portfolio} />

        </CSSTransitionGroup>


      </div>
    );
}

export default WebDev;
