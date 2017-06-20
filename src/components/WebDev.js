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

    let githubRepos, githubUserInfo;

    fetch("https://api.github.com/users/BrotherDonkey")
        .then((res)=>{
          if (res.ok)
            return res.json();
            throw new Error('Some problem with fetch');
          })
        .then((json)=>{ githubUserInfo = json
        })
        .catch((error) => {
          console.log(`There was an error getting user info: ${error}`)
        });

    fetch("https://api.github.com/users/BrotherDonkey/repos")
        .then((res)=>{
          if (res.ok)
            return res.json();
            throw new Error('Some problem with fetch');
          })
        .then((json)=>{ githubRepos = json
        })
        .catch((error) => {
          console.log(`There was an error getting repo info: ${error}`)
        });


    return (
      <div className="main-content">
        <PageTitle
          icon={<BrowserSVG className="page-icon" height="75" width="75" />}
          title="Web Dev" />
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
          <Route path={`${match.path}/stack`} render={() => <Stack title={data.subpageTitle} frontEnd={data.frontEnd} backEnd={data.backEnd} tools={data.tools}/> } />
          <Route path={`${match.path}/portfolio`} render={() => <Portfolio title="Portfolio" note={`the following does work because it needs to set the state when it gets the info`} userInfo={githubUserInfo} repos={githubRepos} /> } />

        </CSSTransitionGroup>


      </div>
    );
}

export default WebDev;
