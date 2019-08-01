import React from "react";

const Key = props => {
  return (
    <button
      key={props.className}
      className={props.className}
      onClick={() => props.playAudio(props.className)}
    >
      {props.className.toUpperCase()}
    </button>
  );
};

export default Key;
