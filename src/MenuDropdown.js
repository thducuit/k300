import React from "react";
import MenuItem from "./MenuItem";

const MenuDropdown = props => {
  const { active, text, icon, children } = props;

  if(children) {
    <li class="submenu"> 
        {children}
    </li>
  }

  //default Menu Dropdown
  return (
    <li class="submenu"> <a href="#"><i class="icon icon-th-list"></i> <span>Forms</span> <span class="label label-important">3</span></a>
        <ul>
            <MenuItem>Test</MenuItem>
        </ul>
    </li>
  );
};
export default MenuDropdown;

