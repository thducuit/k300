import React from "react";

const WidgetHeader = props => {
  const { text, icon, children } = props;

  if(children) {
    return (
      <div class="widget-title" data-toggle="collapse" href="#collapseG2">
          {children}
      </div>
    );
  }

  //default widget header
  return (
    <div class="widget-title" data-toggle="collapse" href="#collapseG2">
        { icon ? <span class="icon"><i class={icon}></i></span> : null }
        { text ? <h5>{text}</h5> : null }
    </div>
  );
};

export default WidgetHeader;