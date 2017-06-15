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
      <h5> icon</h5>
    </div>
  </div>
)
}

export default Stack;
