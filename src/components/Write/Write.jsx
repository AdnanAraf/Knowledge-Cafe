import React from "react";

const Write = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.write}</h1>
    </div>
  );
};

export default Write;
