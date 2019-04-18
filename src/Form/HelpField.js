import React from "react";

const HelpField = props => {
  const { text } = props;

  return (
    <span class="help-block">{text}</span>
  );
};

export default HelpField;