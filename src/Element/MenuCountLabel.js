import React from "react";

const MenuCountLabel = props => {
  const { number } = props;

  return (
    <span class="label label-important">{number}</span>
  );
};
export default MenuCountLabel;
