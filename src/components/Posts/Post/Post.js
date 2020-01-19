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

  let notText = !props.is_text;

  let isImage = () => {
    let regex = /.*\.jpg$|.*\.png$|.*\.gif$/;
    let foundStuff = regex.exec(props.image);
    console.log(props.image);
    console.log(foundStuff !== 0);
    return (foundStuff !== 0 ? true : false);
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
      <div>
        {notText && isImage() && <img src={props.image} width="600" align="center" />}
      </div>
    </div>
  );
};

export default post;
