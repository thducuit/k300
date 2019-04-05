import React from "react";

const Nav = props => {
  const { children } = props;
  return (
    <ul class="nav">
        {children}
    </ul>
  );
};

export default Nav;