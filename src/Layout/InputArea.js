import React from "react";

const InputArea = props => {
  const { children } = props;
  return (
    <div class="controls">
      {children}
    </div>
  );
};

export default InputArea;