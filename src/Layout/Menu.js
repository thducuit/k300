import React from "react";

const Menu = props => {
  const { children } = props;
  return (
    <ul> 
        {children}
    </ul>
  );
};
export default Menu;
