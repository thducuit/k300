import React from "react";

const Content = props => {
  const { children } = props;
  return (
    <div id="content">
      {children}
    </div>
  );
};

export default Content;