import React from "react";

const Table = props => {

  const { children, usecheck } = props;

  const clsUseCheck = usecheck ? 'with-check' : '';

  const cls = ['table table-bordered table-striped', clsUseCheck].join(' ');

  return (
    <table class={cls}>
        {children}
    </table>
  );
  
};

export default Table;