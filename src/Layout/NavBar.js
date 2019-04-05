import React from "react";

const NavBar = props => {
  const { children } = props;
  return (
    <div id="user-nav" class="navbar navbar-inverse">
        {children}
    </div>
  );
};

export default NavBar;