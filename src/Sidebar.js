import React from "react";

const Sidebar = props => {
  const { color, text } = props;
  return (
    <div id="sidebar">
      {text}
    </div>
  );
};

export default Sidebar;