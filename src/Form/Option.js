import React from "react";

const Option = props => {
  const { value, text, disabled, selected } = props;

  //default option
  return (
    <option>{text}</option>
  );
};

export default Option;