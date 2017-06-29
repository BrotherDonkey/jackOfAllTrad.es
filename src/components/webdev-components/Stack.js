import React from 'react';





const Stack = (props, {match}) => {

  const showDesc = (e) => {
    const eTarget = e.target;
    console.log(eTarget.style.transform);
    if (eTarget.style.transform === "rotate(360deg)"){
      eTarget.style.transition = "1s ease";
      eTarget.style.transform = "rotate(0)";
    } else {
      eTarget.style.transition = "1s ease";
      eTarget.style.transform = "rotate(360deg)";
    }
  }

  const iconsFrontEnd = props.frontEnd.icons.map((icon, index) =>{
    return (
        <div className="stack-icon-sub-cont" key={`${index}${icon.name}`} >
          <p className="stack-icon-name">{icon.name}</p>
          <img src={`${process.env.PUBLIC_URL}${icon.imgPath}`} alt={`${icon.name}`} className="stack-icon" onClick={showDesc} />
          <p className="stack-icon-desc">{icon.desc}</p>
        </div>
    );
  });

  const iconsBackEnd = props.backEnd.icons.map((icon, index) =>{
    return (
      <div className="stack-icon-sub-cont" key={`${index}${icon.name}`} >
        <p className="stack-icon-name">{icon.name}</p>
        <img src={`${process.env.PUBLIC_URL}${icon.imgPath}`} alt={`${icon.name}`} className="stack-icon" onClick={showDesc}  />
        <p className="stack-icon-desc">{icon.desc}</p>
      </div>
    );
  });

  const iconsTools = props.tools.icons.map((icon, index) =>{
    return (
      <div className="stack-icon-sub-cont" key={`${index}${icon.name}`} >
        <p className="stack-icon-name">{icon.name}</p>
        <img src={`${process.env.PUBLIC_URL}${icon.imgPath}`} alt={`${icon.name}`} className="stack-icon" onClick={showDesc} />
        <p className="stack-icon-desc">{icon.desc}</p>
      </div>
    );
  });

  return (
  <div>
  <h5 className="page-subtitle">- {props.title} -</h5>
  <div className="stack-cont">
    <div className="stack-header-background">
      <h5 className="stack-title">{props.frontEnd.title}</h5>
      <p className="stack-desc">{props.frontEnd.desc}</p>
    </div>
    <div className="stack-icon-cont">
        {iconsFrontEnd}
    </div>
  </div>
  <div className="stack-cont">
    <div className="stack-header-background">
      <h5 className="stack-title">{props.backEnd.title}</h5>
      <p className="stack-desc">{props.backEnd.desc}</p>
    </div>
    <div className="stack-icon-cont">
        {iconsBackEnd}
    </div>
  </div>
  <div className="stack-cont">
    <div className="stack-header-background">
      <h5 className="stack-title">{props.tools.title}</h5>
      <p className="stack-desc">{props.tools.desc}</p>
    </div>
    <div className="stack-icon-cont">
        {iconsTools}
    </div>
  </div>

  </div>
)
}

export default Stack;
