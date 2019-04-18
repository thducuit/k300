import React from "react";
import MenuCountLabel from "./MenuCountLabel";
import Icon from "./Icon";

const MenuDropdown = props => {
  
  const { children, text, number, open, icon, onClick } = props;

  return (
    <li class={ open ? "submenu open" : "submenu" }>
        <a onClick={ onClick }>{ icon ? <Icon icon={icon} /> : null }<span>{text}</span>{ number ? <MenuCountLabel number={number} /> : null }</a>
        {children}
    </li>
  );
};
export default MenuDropdown;

