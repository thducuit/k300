import React from "react";
import NavItem from "./NavItem";

const NavDropdown = props => {
  const { active, text, icon, children } = props;

  if(children) {
    <li class="dropdown" id="profile-messages" >
        {children}
    </li>
  }

  //default Menu Dropdown
  return (
    <li class="dropdown" id="profile-messages" ><a title="" href="#" data-toggle="dropdown" data-target="#profile-messages" class="dropdown-toggle"><i class="icon icon-user"></i>  <span class="text">Welcome User</span><b class="caret"></b></a>
        <ul class="dropdown-menu">
            <NavItem />
            <li class="divider"></li>
        </ul>
    </li>
  );
};
export default NavDropdown;