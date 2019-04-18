import React from "react";

const Button = props => {
  const { icon, tip, text, children, submit, mini, type, disabled } = props;

  const tipcls = tip ? 'tip' : '';
  const typecls = type ? 'btn-'+type : 'btn-default';
  const minicls = mini ? 'btn-mini' : '';
  const cls = ['btn', typecls, tipcls, minicls].join(' ');
  const buttontype = submit ? 'submit' : button;
  
  if(children) {
    return (
      disabled ? <button disabled type={buttontype} class={cls} title={tip}>{children}</button> : <button type={buttontype} class={cls} title={tip}>{children}</button>
    );
  }

  //default button
  return (
    disabled ? <button disabled type={buttontype} class={cls} title={tip}>{ icon ? <i class={icon}></i> : null  } {text}</button> : <button type={buttontype} class={cls} title={tip}>{ icon ? <i class={icon}></i> : null  } {text}</button>
  );
};

export default Button;