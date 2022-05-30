import React from "react";
import { NavLink } from "react-router-dom";
import CommentCard from "../components/CommentCard";

function BlogPage({ blog }) {
  return (
    <div>
      <h1>{blog.title}</h1>
      <h3>{blog.topic}</h3>
      <h4>Author: {blog.user.username}</h4>
      <h5>{blog.content}</h5>
      <br></br>
      <p>Comments</p>
      {blog.comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
      <NavLink to={"/blogs"}>
        <p>Return to Blogs</p>
      </NavLink>
    </div>
  );
}

export default BlogPage;
