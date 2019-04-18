import React from "react";

const FormAction = props => {
  const { children } = props;
  return (
    <div class="form-actions">
      {children}
    </div>
  );
};

export default FormAction;