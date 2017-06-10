import React from 'react';
import SubNav from './SubNav';


const personalDescription = "After I graduated from university with a B.A. in English Literature, I travelled the world for seven years. I lived in China for five years, Taiwan for one, Japan for a bit, and England for a bit. I've written two cyberpunk novels, which you can find on Amazon if you like. Three years ago I started a business with two friends called Fictuary, which was a short fiction publishing website and app. I've recently moved back to the US to \"settle down,\" and hope to satisfy my ever-increasing curiosity and love of building things as a web developer in Seattle."

const About = () => {
    return (
      <div className="main-content">
        <h2 className="section-title">About</h2>
        <p className="section-desc">{personalDescription}</p>
        <div className="sub-nav">
          <SubNav />
        </div>
      </div>
    );
};

export default About;
