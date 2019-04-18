import React from "react";

const StatsItem = props => {
  const { text, number, icon, children } = props;

  if(children) {
    <li class="bg_lh">{children}</li>
  }

  return (
    <li class="bg_lh">{ icon ? <i class={icon}></i> : null } { number ? <strong>{number}</strong> : null } { text ? <small>{text}</small> : null }</li>
  );
};

export default StatsItem;