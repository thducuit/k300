import React from "react";

const Icon = props => {
  const { icon } = props;

  return (
    <i class={'icon icon-' + icon}></i>
  );
};
export default Icon;
