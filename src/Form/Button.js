import React from "react";

const Button = props => {
  const { title, icon, tip, text, children } = props;

  if(children) {
    return (
      <button type="button" class={ tip || "tip-bottom" } title={title}>{children}</button>
    );
  }

  //default button
  return (
    <button type="button" class={ tip || "tip-bottom" } title={title}>{ icon ? <i class={icon}></i> : null  } {text}</button>
  );
};

export default Button;