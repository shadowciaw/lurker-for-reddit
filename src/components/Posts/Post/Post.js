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
    let regex = /(.*\.jpg$)|(.*\.png$)|(.*\.gif$)/;
    let foundStuff = regex.exec(props.image);
    return foundStuff !== null ? true : false;
  };

  let computeTime = () => {
    const curTime = Date.now();
    let diff = curTime / 1000 - props.created;
    diff = Math.round(diff / 60 / 60);
    return (diff.toString() + 'h ago');
  }
  
  return (
    //
    <div className={classes.Post}>
      <div className={classes.Title}>
        <div className={classes.TitleScore}>{calcScore()}</div>
        <div className={classes.TitleText}>{props.title}</div>
        <div className={classes.TitleSubreddit}>{props.subreddit}</div>
        <div className={classes.TitleUsername}>u/{props.author}</div>
        <div className={classes.TitleTime}>{computeTime()}</div>
      </div>
      <div>
        {notText && isImage() && (
          <img src={props.image} width="600" align="center" />
        )}
        {notText && !isImage() && (
          <video width="600" controls autoplay>
            {console.log(props.image)}
            <source src={props.image} />
          </video>
        )}
      </div>
    </div>
  );
};

export default post;
