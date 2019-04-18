import React from "react";

const Input = props => {
  const { value, placeholder, span, tip, disabled, password } = props;

  const spancls = span ? 'span'.span : 'span11';
  const tipcls = tip ? 'tip' : '';
  const type = password ? 'password' : 'text';
  const cls = [spancls, tipcls].join(' ');

  return (
    disabled ? <input value={value} type={type} data-title={tip} placeholder={placeholder} class={cls} disabled /> : <input value={value} type={type} data-title={tip} placeholder={placeholder} class={cls} />
  );
};

export default Input;