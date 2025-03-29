import React from "react";
function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className="loader-text">Reseter Portfolio...</div>
    </div>
  );
}

export default Pre;
