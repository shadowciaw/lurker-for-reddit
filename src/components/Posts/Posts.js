import React from "react";

import Post from "./Post/Post";

const posts = props => {
  console.log("[Posts.js] rendering...");

  return (
    <div>
      <Post data={props.testPost} />
    </div>
  );
};

export default posts;
