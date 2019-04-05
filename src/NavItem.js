import React from "react";

const NavItem = props => {
  const { icon, text, children } = props;

  if(children) {
    <li>{children}</li>
  }

  //default Nav Item
  return (
    <li><a href="#">{ icon ? <i class={icon}></i> : null } <span class="text">{text}</span></a></li>
  );
};

export default NavItem;