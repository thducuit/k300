import React from "react";

const Search = props => {
  const { children } = props;
  return (
    <div class="widget-box">
        {children}
    </div>
  );
};

export default Search;