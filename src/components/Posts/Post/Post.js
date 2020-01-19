import React from "react";

// import Button from "../../../../node_modules/react-bootstrap/Button";

import classes from "./Post.module.css";

const post = props => {
  console.log("[Post.js] rendering...");

  return (
    <div className={classes.Post}>
      <div className={classes.Title}>
        <div className={classes.TitleText}>{props.data.data.children[0].data.title}</div>
      </div>
      <img
        src={props.data.data.children[0].data.url}
        width="600"
        align="left"
      />
    </div>
  );
};

export default post;
