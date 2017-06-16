import React from 'react';





const Stack = (props, {match}) => {
  console.log(props.data.icons);

  const iconsFrontEnd = props.data.icons.map((icon, index) =>{
    return (
      <div className="stack-icon-sub-cont" key={`${index}${icon.name}`} >
        <p className="stack-icon-name">{icon.name}</p>
        <img src={`${icon.imgPath}`} alt={`${icon.name}`} className="stack-icon" />
        <p className="stack-icon-desc">{icon.desc}</p>
      </div>
    );
  });



  return (
  <div className="stack-cont">
    <div className="stack-header-background">
      <h5 className="stack-title">{props.data.title}</h5>
      <p className="stack-desc">{props.data.desc}</p>
    </div>
    <div className="stack-icon-cont">
        {iconsFrontEnd}
    </div>
  </div>
)
}

export default Stack;
