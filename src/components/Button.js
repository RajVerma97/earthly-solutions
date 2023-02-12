import React from "react";
import "./Button.css";

export default function Button({text, bgColor,textColor}) {
  return (
    <div>
      <div className="btn" style={{backgroundColor: bgColor,color:textColor}}>
        <p className="btn__text">{text}</p>
      </div>
    </div>
  );
}
