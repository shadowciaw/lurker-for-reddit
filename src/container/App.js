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

  // filter function that sets the state and calls for a re-render
  filterData = responseItem => {
    // ... code here; edit response Item

    this.setState(responseItem);
  };

  // will be called when user presses "load more posts button"
  fetchPosts = post_id => {
    var url;
    if (post_id === "init") {
      url = "https://www.reddit.com/r/all/top/.json?limit=1";
    } else {
      url = "https://www.reddit.com/r/all/top/.json??limit=1?after=" + post_id;
    }
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    // this.setState(xmlHttp.responseText);

    this.filterData(xmlHttp.responseText);
  };

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Title}>
          <h1>Lurker for Reddit</h1>
          <button onClick={() => this.fetchPosts("init")}>refetch</button>
          {console.log("current state", this.state)}
        </div>
        <div className={classes.Body}>
          <Posts testPost={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
