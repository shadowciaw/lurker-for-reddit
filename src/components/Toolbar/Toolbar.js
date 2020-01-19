import React from "react";

const toolbar = props => {
  console.log("[Toolbar.js] rendering...");

  return (
    <div>
      <button onClick={props.toggleNSFW}> toggle NSFW </button>
      <button> null </button>
    </div>
  );
};

export default toolbar;
