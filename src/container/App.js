import React, { Component } from "react";
import classes from "./App.module.css";

import Posts from "../components/Posts/Posts";
import Toolbar from "../components/Toolbar/Toolbar";

import testPost from "../assets/test_data";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      showNSFW: false,
      posts: [testPost]
    };
  }

  state = {
    showNSFW: false,
    posts: []
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

  toggleNSFWHandler = () => {
    let showNSFW = this.state.showNSFW;
    console.log(showNSFW ? "now SHOWING NSFW" : "NOT SHOWING NSFW");
    this.setState({ showNSFW: !showNSFW });
  };

  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Title}>
          <h1>Lurker for Reddit</h1>
        </div>
        <div className={classes.Body}>
          <div>
            <Toolbar toggleNSFW={this.toggleNSFWHandler} />
          </div>
          <Posts testPost={testPost} />
        </div>
        <button
          className={classes.LoadMoreButton}
          onClick={() => this.fetchPosts("init")}
        >
          load more posts
        </button>
      </div>
    );
  }
}

export default App;
