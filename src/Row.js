import React from "react";

const Row = props => {
  const { children } = props;
  return (
    <div class="row-fluid">
        {children}
    </div>
  );
};

export default Row;