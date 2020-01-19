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
    // this is 4am code i know its bad

    // todo: i.reddit
    let youtube = /.*youtu.be\/([a-zA-Z0-9]+)/;
    let gifv = /.*(\/\/i\.imgur\.com\/[a-zA-Z0-9]+)\.gifv/;
    let gfycat = /.*gfycat.com\/([a-zA-Z]+)/;
    let vreddit = /.*v\.reddit\.it\/[a-zA-Z0-9]+/;

    if (url.match(youtube)) {
      url = "https://www.youtube.com/embed/" + url.match(youtube[1]);
      return (
        <iframe
          width="600"
          height="315"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      );
    } else if (url.match(gifv)) {
      url = url.match(gifv)[1] + ".mp4";
      return (
        <video preload="auto" autoPlay="autoplay" loop="loop" width="600">
          <source src={url} type="video/mp4" />
        </video>
      );
    } else if (url.match(gfycat)) {
      url = "https://gfycat.com/ifr/" + url.match(gfycat)[1];
      return (
        <iframe
          src={url}
          frameBorder="0"
          scrolling="no"
          width="600"
          height="315"
        ></iframe>
      );
    } else if (url.match(vreddit)) {
      return (
        <blockquote class="reddit-card" data-card-created="1579438370">
          <a href="https://www.reddit.com/r/nextfuckinglevel/comments/eo66t2/this_guy_is_an_asian_parents_dream_child/">
            This Guy is an Asian Parent's Dream Child
          </a>{" "}
          from{" "}
          <a href="http://www.reddit.com/r/nextfuckinglevel">
            r/nextfuckinglevel
          </a>
        </blockquote>
      );
    } else {
      // console.log("could not match anything: " + url);
      return <a href={url}>{url}</a>;
    }
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
      <div className={classes.TitleImage}>
        {props.is_text && (
          <div className={classes.TitleImageText}>{props.selftext}</div>
        )}
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
