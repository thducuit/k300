import React from "react";

const Search = props => {
  const { color, text } = props;
  return (
    <div id="search">
        <input type="text" placeholder="Search here..."/>
        <button type="submit" class="tip-bottom" title="Search"><i class="icon-search icon-white"></i></button>
    </div>
  );
};

export default Search;