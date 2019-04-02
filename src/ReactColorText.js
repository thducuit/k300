import React from "react";

const ReactColorText = props => {
  const { color, text } = props;
  return (
    <div
      style={{
        backgroundColor: color || "red"
      }}
    >
      {text}
    </div>
  );
};

export default ReactColorText;