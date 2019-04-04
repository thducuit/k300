import React from "react";

const Span = props => {
  const { col, children } = props;
  return (
    <div class={ 'span' + col || ""  }>
        {children}
    </div>
  );
};

export default Span;