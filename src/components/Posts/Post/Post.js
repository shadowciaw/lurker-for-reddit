import React from "react";

// import Button from "../../../../node_modules/react-bootstrap/Button";

import classes from "./Post.module.css";

const post = props => {
  console.log("[Post.js] rendering...");

  return (
    <div className={classes.Post}>
      <img
        src={props.data.data.children[0].data.url}
        width="600"
        align="right"
      />
    </div>
  );
};

export default post;
