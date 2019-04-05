import React from "react";

const Header = props => {
  const { background, text, children } = props;

  if(children) {
    <div id="header">
        {children}
    </div>
  }

  //default header
  return (
    <div id="header">
        <h1 style={{
              background: background || 'none'
          }}><a href="#">{text}</a></h1>
    </div>
  );
};

export default Header;