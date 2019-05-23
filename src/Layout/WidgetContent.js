import React from "react";

const WidgetContent = props => {

  const { children, nopadding } = props;

  const clsPadding = nopadding ? 'nopadding' : '';
  const cls = ['widget-content', clsPadding].join(' ');
  
  return (
    <div class={cls}>
        {children}
    </div>
  );
};

export default WidgetContent;