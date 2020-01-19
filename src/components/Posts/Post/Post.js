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
    return diff.toString() + "h ago";
  };

  let showVideo = url => {
    let regex = /.*youtu.be\/([a-zA-Z0-9]+)/;
    let result = url.match(regex);
    console.log(result);
    if (result) {
      url = "https://www.youtube.com/embed/" + result[1];
    }

    return (
      <iframe
        width="600"
        height="315"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    );
  };

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
        {notText &&
          !isImage() &&
          // <video width="600" controls autoPlay>
          //   {/* {console.log(props.image)} */}
          //   <source src={props.image} type="video/mp4" />
          // </video>
          showVideo(props.image)}
      </div>
    </div>
  );
};

export default post;
