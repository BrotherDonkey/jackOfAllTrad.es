import React from 'react';
//import styles
import '../App.css';


const Box = (props) => {
  return (
    <div className="box-link-cont">
      <div className="box-side front">{props.linkName}</div>
      <div className="box-side back"></div>
      <div className="box-side left"></div>
      <div className="box-side right"></div>
      <div className="box-side top"></div>
      <div className="box-side bottom"></div>
    </div>
)
}

export default Box;
