import React, { Component } from "react";
import classes from "./App.module.css";

import Posts from "../components/Posts/Posts";

import testPost from "../assets/test_data";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    ...testPost
  };

  // write your fetch funtion here!! will be called when user presses "load more posts button"
  refetch = post_id => {
    var url;
    if (post_id === "init") {
      url = "https://www.reddit.com/r/all/top/.json?limit=1";
    } else {
      url =
        "https://www.reddit.com/r/all/top/.json??limit=1?" + "after=" + post_id;
    }
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
  };

  render() {
    return (
      <div className={classes.App}>
        <h1>Lurker for Reddit</h1>
        <button onClick={() => this.refetch("init")}>refetch</button>
        {console.log("test1", this.state)}

        <Posts testPost={this.state} />
      </div>
    );
  }
}

export default App;
