import React from "react";

const MenuItem = props => {
  const { active, children } = props;

  //default Menu Item
  return (
    <li class={ active ? 'active' : 'item' }>
        {children} 
    </li>
  );
};
export default MenuItem;
