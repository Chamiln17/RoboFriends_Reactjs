import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        borderTop: "1px double aqua",
        height: "75vh",
        paddingTop: "20px",
      }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;
