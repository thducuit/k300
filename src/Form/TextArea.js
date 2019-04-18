import React from "react";

const TextArea = props => {
  const { value, disabled, span } = props;

  const spancls = span ? 'span'.span : 'span11';
  const cls = [spancls].join(' ');

  //default textarea
  return (
    disabled ? <textarea disabled class={cls} >{value}</textarea> : <textarea class={cls} >{value}</textarea>
  );
};

export default TextArea;