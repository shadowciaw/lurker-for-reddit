import React from "react";

// import Button from "../../../../node_modules/react-bootstrap/Button";

import classes from "./Post.module.css";

const post = props => {
  console.log("[Post.js] rendering...");

  let calcScore = () => {
    let score = props.score;
    score =
      parseFloat(score) >= 1000
        ? (Math.round(score / 100) / 10).toString() + "k"
        : score;
    return score;
  };

  let isText = () => {
    if ()
  }

  return (
    //
    <div className={classes.Post}>
      <div className={classes.Title}>
        <div className={classes.TitleScore}>{calcScore()}</div>
        <div className={classes.TitleText}>{props.title}</div>
        <div className={classes.TitleSubreddit}>{props.subreddit}</div>
        <div className={classes.TitleUsername}>u/{props.author}</div>
        <div className={classes.TitleTime}>time</div>
      </div>
      <img src={props.image} width="600" align="left" />
    </div>
  );
};

export default post;
