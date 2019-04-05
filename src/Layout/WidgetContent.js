import React from "react";

const WidgetContent = props => {
  const { children } = props;
  return (
    <div class="widget-content nopadding collapse in" id="collapseG2">
        {children}
    </div>
  );
};

export default WidgetContent;