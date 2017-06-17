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



class WebDev2 extends React.Component {
  // ({match}) => {

    constructor(props){
      super(props);
      this.state = {
        data: stackData,
        githubRepos: [],
        githubUserInfo: {},
        match: this.props.match
      }
    }

    componentWillMount(){

      fetch("https://api.github.com/users/BrotherDonkey")
          .then((res)=>{
            if (res.ok)
              return res.json();
              throw new Error('Some problem with fetch');
            })
          .then((json)=>{
            this.setState({
              githubUserInfo : json
            });
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
          .then((json)=>{
              this.setState({
                githubRepos : json
              });
          })
          .catch((error) => {
            console.log(`There was an error getting repo info: ${error}`)
          });
    }

    render(){
    return (
      <div className="main-content">
        <PageTitle
          icon={<BrowserSVG className="page-icon" height="75" width="75" />}
          title="Web Dev" />
          <SubNav match={this.props.match} />

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

          <Route exact path={`${this.props.match.path}`} render={() => <Redirect to={`${this.props.match.path}/stack`} />} />
          <Route path={`${this.props.match.path}/stack`} render={() => <Stack title={this.state.data.subpageTitle} frontEnd={this.state.data.frontEnd} backEnd={this.state.data.backEnd} tools={this.state.data.tools}/> } />
          <Route path={`${this.props.match.path}/portfolio`} render={() => <Portfolio title="Portfolio" userInfo={this.state.githubUserInfo} repos={this.state.githubRepos} /> } />
        </CSSTransitionGroup>
      </div>
    );
  }



} //end class

export default WebDev2;
