import React from "react";

import Post from "./Post/Post";

const posts = props => {
  console.log("[Posts.js] rendering...");

  return props.post.map((post, index) => {
    return (
      <Post
        key={post.id}
        subreddit={post.subreddit}
        title={post.title}
        score={post.score}
        created={post.created}
        nsfw={post.nsfw}
        author={post.author}
        spoiler={post.spoiler}
        image={post.image}
      />
    );
  });
};

export default posts;
