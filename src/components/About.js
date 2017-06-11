import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import SubNav from './SubNav';
import Bear2svg from './svg-components/Bear2svg';
import MtSvgLines from 'react-mt-svg-lines';
import Arrowsvg from './svg-components/Arrowsvg';

//component imports
import LinkedPanel from './LinkedPanel';
import PageTitle from './PageTitle';


const personalDescription = "After I graduated from university with a B.A. in English Literature, I travelled the world for seven years. I lived in China for five years, Taiwan for one, Japan for a bit, and England for a bit. I've written two cyberpunk novels, which you can find on Amazon if you like. Three years ago I started a business with two friends called Fictuary, which was a short fiction publishing website and app. I've recently moved back to the US to \"settle down,\" and hope to satisfy my ever-increasing curiosity and love of building things as a web developer in Seattle."

const About = () => {
    return (
      <div className="main-content">
        <PageTitle
          icon={<Bear2svg className="page-icon" height="100" width="100" />}
          title="About" />
          <div className="page-summary">
            <p>Some content?</p>
          </div>
      </div>
    );
};

export default About;
