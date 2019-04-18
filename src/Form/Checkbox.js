import React from "react";

const Checkbox = props => {
  const { name, text, disabled } = props;

  //default checkbox
  return (
    <label><input type="checkbox" name={name} />
                  {text}</label>
  );
};

export default Checkbox;