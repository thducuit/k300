import React from "react";

const ProgressBar = props => {
  const { percent, type, striped } = props;
  return (
    <div class="progress progress-success progress-striped">
        <div style="width: 72%;" class="bar"></div>
    </div>
  );
};

export default ProgressBar;