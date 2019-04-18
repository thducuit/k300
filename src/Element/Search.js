import React from "react";
import Input from "./Form/Input";
import Button from "./Form/Button";

const Search = props => {
  const { children } = props;

  if(children) {
    return (
      <div id="search">
        {children}
      </div>
    );
  }

  //default search
  return (
    <div id="search">
        <Input placeholder="Search now..." />
        <Button icon="icon-search" tip="Search"></Button>
    </div>
  );
  
};

export default Search;