import React from "react";

import Post from "./Post/Post";

const posts = props => {
  console.log("[Posts.js] rendering...");

  return props.posts.map((post, index) => {
    return (
      <Post
      // post
      />
    );
  });
};

export default posts;
