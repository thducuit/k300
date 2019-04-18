import React from "react";

const MenuItem = props => {
  const { active, text, icon, children } = props;

  if(children) {
    <li class={ active ? 'active' : 'item' }>
        {children}
    </li>
  }

  //default Menu Item
  return (
    <li class={ active ? 'active' : 'item' }><a href="#">{ icon ? <i class={icon}></i> : null } <span>{text}</span></a> </li>
  );
};
export default MenuItem;
