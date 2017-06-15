import React from 'react';





const Stack = (props) => {
  console.log(props.data);
  return (
  <div className="stack-cont">
    <div className="stack-header-background">
      <h5 className="stack-title">{props.data.title}</h5>
      <p className="stack-desc">{props.data.desc}</p>
    </div>
    <div className="stack-icon-cont">
      <div className="icons">
        <p className="fake-icon" >{props.data.title}</p>
        <p className="fake-icon" >{props.data.title}</p>
        <p className="fake-icon" >{props.data.title}</p>
        <p className="fake-icon" >{props.data.title}</p>
      </div>
      <div className="descriptions">
        <p>here's a description of one of the skills</p>
      </div>
    </div>
  </div>
)
}

export default Stack;
