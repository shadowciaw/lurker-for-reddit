import React from "react";

// import Button from "../../../../node_modules/react-bootstrap/Button";

import classes from "./Post.module.css";

const post = props => {
  console.log("[Post.js] rendering...");

  let calcScore = () => {
    let score = props.data.data.children[0].data.score;
    score =
      parseFloat(score) >= 1000
        ? (Math.round(score / 100) / 10).toString() + "k"
        : score;
    return score;
  };

  return (
    //
    <div className={classes.Post}>
      <div className={classes.Title}>
        <div className={classes.TitleScore}>{calcScore()}</div>
        <div className={classes.TitleText}>
          {props.data.data.children[0].data.title}
        </div>
        <div className={classes.TitleSubreddit}>
          {props.data.data.children[0].data.subreddit_name_prefixed}
        </div>
        <div className={classes.TitleUsername}>
          u/{props.data.data.children[0].data.author}
        </div>
        <div className={classes.TitleTime}>time</div>
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
