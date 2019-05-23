import React from "react";
import Icon from "../Element/Icon";

const WidgetHeader = props => {

  const { text, icon, children } = props;

  if(children) {
    return (
      <div class="widget-title">
          {children}
      </div>
    );
  }

  //default widget header
  return (
    <div class="widget-title">
        { icon ? <span class="icon"><Icon icon={icon} /></span> : null }
        { text ? <h5>{text}</h5> : null }
    </div>
  );
};

export default WidgetHeader;