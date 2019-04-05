import React from "react";

const Breadcrumb = props => {
  const { children } = props;

  if(children) {
    return (
      <div id="breadcrumb">
        {children}
      </div>
    );
  }

  //default breadcrumb
  return (
    <div id="breadcrumb">
        <a href="#" title="Go to Home" class="tip-bottom"><i class="icon-home"></i> Home</a> 
        <a href="#" class="current">Buttons &amp; icons</a>
    </div>
  );
};

export default Breadcrumb;