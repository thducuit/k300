import React from "react";

const Radio = props => {
  const { name, text, disabled } = props;

  //default radio
  return (
    <label><input type="radio" name={name} />
                  {text}</label>
  );
};

export default Radio;