import React from "react";
import QuickActionItem from "./QuickActionItem";

const QuickAction = props => {
  const { children } = props;

  if(children) {
    return (
      <ul class="quick-actions">
          {children}
      </ul>
    ); 
  }
  return (
    <ul class="quick-actions">
        <QuickActionItem />  
    </ul>
  );
};

export default QuickAction;