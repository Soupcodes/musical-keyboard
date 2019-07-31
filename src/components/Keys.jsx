import React from "react";

const Key = props => (
  <button
    key={props.className}
    className={props.className}
    onClick={() => props.playSound(props.className)}
  >
    {props.className.toUpperCase()}
  </button>
);

export default Key;
