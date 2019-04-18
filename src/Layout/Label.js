import React from "react";

const Label = props => {
  const { children, text } = props;

  if(children) {
    return (
        <label class="control-label">
          {children}
        </label>
      );
  }

  //default label
  return (
    <label class="control-label">
      {text}
    </label>
  );
};

export default Label;