import React from "react";

const QuickActionItem = props => {
  const { text, number, icon, children } = props;

  if(children) {
    <li>{children}</li>
  }

  return (
    <li class="bg_lb span3"> <a href="index.html"> <i class="icon-dashboard"></i> <span class="label label-important">20</span> My Dashboard </a> </li>
  );
};

export default QuickActionItem;

