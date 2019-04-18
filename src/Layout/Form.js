import React from "react";

const Form = props => {
  const { children, action, method } = props;
  return (
    <form action={action} method={method} class="form-horizontal">
      {children}
    </form>
  );
};

export default Form;