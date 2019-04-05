import React from "react";

const Sidebar = props => {
  const { children } = props;
  return (
    <div id="sidebar">
      {children}
    </div>
  );
};

export default Sidebar;