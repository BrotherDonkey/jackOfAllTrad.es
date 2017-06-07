import React, { Component } from 'react';



const webDevDescription = `A few years ago, as part of a internet publishing site called Fictuary, I began learning web development. Since then I\'ve used JavaScript as my window into this brave new world. Since then I\'ve completed a range of projects (see below) and solidified my knowledge of JavaScript and its many tools.\r\n\r\nThe following is a quick list of my dev-related skills: familiar with the following technologies: JavaScript (much of ES6), NodeJS, React, jQuery, Sass, Git, Jekyll, AngularJS (1), ExpressJS server framework, HTML5, CSS3, UI\/UX Principals, and a willingness to study constantly.\r\n\r\nI\'ve built this site using React.\r\n\r\nI currently work as a Web Designer at CDK Global. Although I'm something of a jack-of-all-trades, I'm not too shabby on the design end. I can use Photoshop, write, edit, and organize a mean stylesheet.`;



export default class WebDev extends Component {
  render() {
    return (
      <div className="web-dev">
        <h2 className="section-title">Web Development and Design</h2>
        <p className="section-desc">{webDevDescription}</p>
      </div>
    )
  }
}
