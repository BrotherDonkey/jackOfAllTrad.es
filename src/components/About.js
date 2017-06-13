import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom';

//component imports
import PageTitle from './PageTitle';
import Card from './Card';
import SvgFlexContainer from './SvgFlexContainer';

//svg components
import Bear2svg from './svg-components/Bear2svg';
import BrowserSVG from './svg-components/BrowserSVG';
import BookshelfSVG from './svg-components/BookshelfSVG';
import Amazon from './svg-components/social-icons/Amazon';
import Medium from './svg-components/social-icons/Medium';
import Twitter from './svg-components/social-icons/Twitter';
import GithubSVG from './svg-components/GithubSVG';
import JavascriptSVG from './svg-components/JavascriptSVG';
import Csssvg from './svg-components/Csssvg';
import Htmlsvg from './svg-components/Htmlsvg';
import Html1SVG from './svg-components/Html1SVG';
import Startupsvg from './svg-components/Startupsvg';











const personalDescription = "After I graduated from university with a B.A. in English Literature, I travelled the world for seven years. I lived in China for five years, Taiwan for one, Japan for a bit, and England for a bit. I've written two cyberpunk novels, which you can find on Amazon if you like. Three years ago I started a business with two friends called Fictuary, which was a short fiction publishing website and app. I've recently moved back to the US to \"settle down,\" and hope to satisfy my ever-increasing curiosity and love of building things as a web developer in Seattle."

const About = () => {
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

          <div className="card-link" to="/webdev">
            <Card title="Web Dev"
                  link="/webdev"
                  icon={<BrowserSVG height="100" width="100" className="card-icon"/>}
                  subheadline="JavaScript, React, Node, & Angular Developer"
                  text="The following is a quick list of my dev-related skills: familiar with the following technologies: JavaScript (much of ES6), React, NodeJS, jQuery, Sass, Git, Jekyll, AngularJS (1), ExpressJS server framework, HTML5, CSS3, UI/UX Principals, and a willingness to study constantly.">
                    <SvgFlexContainer>
                      <GithubSVG className="svg-icon"/>
                      <JavascriptSVG className="svg-icon"/>
                      <Csssvg className="svg-icon"/>
                      <Html1SVG className="svg-icon"/>
                    </SvgFlexContainer>
                  </Card>
          </div>

          <div className="card-link" to="/writing">
            <Card title="Writing"
                  link="/writing"
                  icon={<BookshelfSVG height="100" width="100" className="card-icon"/>}
                  subheadline="Novels, short stories, travel writing and more."
                  text="My two novels A New London Rising and The Fall of Shanghai are available on Amazon and Smashwords affiliates. Click here to read short stories and samples of my novels. Click the Amazon link to support me in my passion; available on Paperback, Kindle, and the iBooks stores.">
                    <SvgFlexContainer>
                      <Amazon className="svg-icon"/>
                      <Startupsvg className="svg-icon"/>
                      <Medium className="svg-icon"/>
                      <Twitter className="svg-icon"/>
                    </SvgFlexContainer>
                  </Card>
          </div>

        </div>
      </div>
    );
};

export default About;
