import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'

//component imports
import PageTitle from './PageTitle';
import SubNav from './SubNav';
import Stack from './webdev-components/Stack';
import Portfolio from './webdev-components/Portfolio'


//svg components
import BrowserSVG from './svg-components/BrowserSVG';

//get data --> change to Axios or Fetch later
import stackData from '../data/stackData';



const WebDev = ({match}) => {

    const data = stackData;
    console.log(data);

    return (
      <div className="main-content">
        <PageTitle
          icon={<BrowserSVG className="page-icon" height="75" width="75" />}
          title={data.subpageTitle} />
          <SubNav match={match} />

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

          <Route exact path={`${match.path}`} render={() => <Redirect to={`${match.path}/stack`} />} />
          <Route path={`${match.path}/stack`} render={() => <Stack data={data.frontEnd} /> } />
          <Route path={`${match.path}/portfolio`} component={Portfolio} name="Portfolio" />

        </CSSTransitionGroup>


      </div>
    );
}

export default WebDev;
