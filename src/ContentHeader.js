import React from "react";

const ContentHeader = props => {
  const { children } = props;
  return (
    <div id="content-header">
        {children}
    </div>
  );
};

export default ContentHeader;