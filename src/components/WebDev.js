import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'

//component imports
import PageTitle from './PageTitle';
import SubNav from './SubNav';
import Stack from './webdev-components/Stack';
import Portfolio from './webdev-components/Portfolio'


//svg components
import Bear2svg from './svg-components/Bear2svg';
import BrowserSVG from './svg-components/BrowserSVG';



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

          <Route exact path={`${match.path}`} render={() => <Redirect to={`${match.path}/stack`} />} />
          <Route path={`${match.path}/stack`} component={Stack} name="Stack"/>
          <Route path={`${match.path}/portfolio`} component={Portfolio} name="Portfolio" />

        </CSSTransitionGroup>


      </div>
    );
}

export default WebDev;
