import React from "react";

const FormGroup = props => {
  const { children, type } = props;

  const cls = ["control-group", type].join(' ');
  
  return (
    <div class={cls}>
      {children}
    </div>
  );
};

export default FormGroup;