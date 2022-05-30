import React from "react";

function BlogPage({ blog }) {
  return (
    <div>
      <h1>{blog.title}</h1>
      <h3>{blog.topic}</h3>
      <h4>{blog.user.username}</h4>
      <p>{blog.content}</p>
      <p>{blog.views}</p>
    </div>
  );
}

export default BlogPage;
