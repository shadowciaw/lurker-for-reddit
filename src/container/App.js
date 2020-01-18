import React, { useState } from "react";
import classes from "./App.module.css";

import Posts from "../components/Posts/Posts";

import test_post from "../assets/test_data";

function App() {
  const [testPost, setTestPost] = useState(test_post);

  return (
    <div className={classes.App}>
      <h1>Lurker for Reddit</h1>
      {console.log("test1", testPost)}

      <Posts testPost={testPost} />
    </div>
  );
}

export default App;
