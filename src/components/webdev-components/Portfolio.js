import React from 'react';





const Portfolio = (props) => {

  const githubRepos = props.repos.map((repo, index) =>{
    return (
      <div className="stack-cont" key={repo.id}>
        <div className="stack-header-background">
          <h5 className="stack-title portfolio-title">{ repo.name }</h5>
          <p className="stack-desc portfolio-desc">{repo.description}</p>
        </div>
        <div className="stack-icon-cont portfolio-icon-cont">
          <p className="portfolio-language">Predominant Language: <em>{repo.language || "Mixture"}</em></p>
          <a className="portfolio-github-link" href={repo.html_url} target="_blank" rel="noopener noreferrer">Visit {repo.name} on <img className="portfolio-inline-github-logo" alt="GitHub Logo" src="/icons/png/github.png"/></a>
        </div>
      </div>
    );
  });


  return (
  <div>
  <h5 className="page-subtitle">- { props.title } -</h5>
  <div className="profile-top">
  <div className="profile-cont">
    <img className="profile-avatar" src={props.userInfo.avatar_url}  alt="Github Avatar" />
    <div className="profile-text">
      <a className="profile-link" href={props.userInfo.html_url} target="_blank" rel="noopener noreferrer">
        <h6 className="profile-login">GitHub: {props.userInfo.login}</h6>
        <p className="profile-public-repos">Public repos: {props.userInfo.public_repos}</p>
        <button className="profile-visit-btn">Visit Profile</button>
      </a>
    </div>
  </div>
  <div className="profile-links-cont">
    <h5 className="profile-links-headline">Live sites</h5>
    <a href="http://allburmarefugees.com" target="_blank" rel="noopener noreferrer" className="profile-links-list-item">
      <p>Coalition for Refugees from Burma</p>
    </a>
    <a href="http://wbbjorn.com" target="_blank" rel="noopener noreferrer" className="profile-links-list-item">
      <p>Site for my novels and short stories: wbbjorn.com</p>
    </a>
  </div>
  </div>

  {githubRepos}


  </div>
)
}

export default Portfolio;
