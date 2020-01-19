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
  refetch = () => {};

  render() {
    return (
      <div className={classes.App}>
        <h1>Lurker for Reddit</h1>
        {console.log("test1", this.state)}

        <Posts testPost={this.state} />
      </div>
    );
  }
}

export default App;
