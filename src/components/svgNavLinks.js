import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import SvgFlexContainer from './SvgFlexContainer';


// icons
import Amazon from './svg-components/social-icons/Amazon';
import Medium from './svg-components/social-icons/Medium';
import Twitter from './svg-components/social-icons/Twitter';
import GithubSVG from './svg-components/GithubSVG';
import JavascriptSVG from './svg-components/JavascriptSVG';
import Csssvg from './svg-components/Csssvg';
import Html1SVG from './svg-components/Html1SVG';
import StoriesSVG from './svg-components/StoriesSVG';

<SvgFlexContainer>

  <NavLink to={`${this.state.url}/amazon`}>
    <Amazon id="amazon" className="svg-icon"/>
  </NavLink>
  <NavLink to={`${this.state.url}/stories`}>
    <StoriesSVG id="stories" className="svg-icon"/>
  </NavLink>
  <NavLink to={`${this.state.url}/medium`}>
    <Medium id="medium" className="svg-icon"/>
  </NavLink>
  <NavLink to={`${this.state.url}/twitter`}>
    <Twitter id="twitter" className="svg-icon"/>
  </NavLink>

</SvgFlexContainer>


<SvgFlexContainer>
  <NavLink to={`${this.state.url}/amazon`}>
    <GithubSVG id="github" className="svg-icon" />
  </NavLink>
  <NavLink to={`${this.state.url}/amazon`}>
    <JavascriptSVG id="javascript" className="svg-icon"/>
  </NavLink>
  <NavLink to={`${this.state.url}/amazon`}>
    <Csssvg id="css" className="svg-icon"/>
  </NavLink>
  <NavLink to={`${this.state.url}/amazon`}>
    <Html1SVG id="html" className="svg-icon"/>
  </NavLink>
</SvgFlexContainer>
