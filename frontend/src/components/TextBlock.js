import React from "react";
import './TextBlock.css'

function TextBlock(props) {
  return (
    <div className="text-block">
      <p className="text-block-ico">{props.icon}</p>
      <p className="text-block-title">{props.title}</p>
      <p className="text-block-description">{props.description}</p>
    </div>
  );
}

export default TextBlock;
