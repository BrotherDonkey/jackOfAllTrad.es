import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

//component imports
import PageTitle from './PageTitle';
import Card from './Card';

//svg components
import Bear2svg from './svg-components/Bear2svg';

//import data
import aboutData from '../data/aboutData';




class About extends React.Component {
  constructor({match}){
    super();
    this.state = aboutData;
  }

  render(){
    return (

      <div className="main-content">
        <PageTitle
          icon={<Bear2svg className="page-icon" height="100" width="100" />}
          title="About" />

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
            <p>W.B. Bjorn is a web developer, former-teacher, shortstoryist, traveller, novelist, and scifi and fantasy aficionado. Raised in Idaho, currently residing in Seattle, he has lived in Wuxi, Shanghai, Taipei, Nagoya and Oxford.</p>
        </CSSTransitionGroup>

        <div className="card-cont">

          <div className="card-link">
            <Card title={this.state.sectionOne.title}
                  link={this.state.sectionOne.linkPath}
                  icon={this.state.sectionOne.icon}
                  subheadline={this.state.sectionOne.subheadline}
                  text={this.state.sectionOne.text}>
                  </Card>
          </div>

          <div className="card-link">
            <Card title={this.state.sectionTwo.title}
                  link={this.state.sectionTwo.linkPath}
                  icon={this.state.sectionTwo.icon}
                  subheadline={this.state.sectionTwo.subheadline}
                  text={this.state.sectionTwo.text}>
                  </Card>
          </div>
        </div>
      </div>
    );
  }
};

export default About;
