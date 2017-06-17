import React from 'react';





const Portfolio = (props) => {


  return (
  <div>
  <h5 className="page-subtitle">- { props.title } -</h5>
  <div className="profile-cont">
    <img className="profile-avatar" src={props.userInfo.avatar_url} />
    <div className="profile-text">
      <a className="profile-link" href={props.userInfo.html_url}>
        <h6 className="profile-login">{props.userInfo.login}</h6>
        <p className="profile-public-repos">Public repos: {props.userInfo.public_repos}</p>
        <button className="profile-visit-btn">Visit Profile</button>
      </a>
    </div>
  </div>
  <div className="stack-cont">
    <div className="stack-header-background"> { props.userInfo.login }
      <h5 className="stack-title"></h5>
      <p className="stack-desc"></p>
    </div>
    <div className="stack-icon-cont">
    </div>
  </div>
  <div className="stack-cont">
    <div className="stack-header-background">
      <h5 className="stack-title"></h5>
      <p className="stack-desc"></p>
    </div>
    <div className="stack-icon-cont">
    </div>
  </div>
  <div className="stack-cont">
    <div className="stack-header-background">
      <h5 className="stack-title"></h5>
      <p className="stack-desc"></p>
    </div>
    <div className="stack-icon-cont">
    </div>
  </div>

  </div>
)
}

export default Portfolio;
