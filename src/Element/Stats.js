import React from "react";
import StatsItem from "./StatsItem";

const Stats = props => {
  const { children } = props;

  if(children) {
    return (
      <ul class="site-stats">
          {children}
      </ul>
    );
  }

  //default Stats
  return (
    <ul class="site-stats">
        <StatsItem></StatsItem>
    </ul>
  );
};

export default Stats;