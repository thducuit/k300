import React from "react";

const Header = props => {
  const { background, text } = props;
  return (
    <div id="header">
        <h1 style={{
              background: background || 'none'
          }}><a href="#">{text}</a></h1>
    </div>
  );
};

export default Header;