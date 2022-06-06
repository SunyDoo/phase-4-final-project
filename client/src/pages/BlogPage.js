import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import CommentForm from "../components/CommentForm";

function BlogPage({ blog, currentUser }) {
  const [commentForm, setCommentForm] = useState(false);
  const [comments, setComments] = useState(blog.comments);

  function handleClick() {
    setCommentForm((commentForm) => !commentForm);
  }

  function handleAddComment(newComment) {
    setComments((comments) => [...comments, newComment]);
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <h3>{blog.topic}</h3>
      <h4>Author: {blog.user.username}</h4>
      <p>{blog.content}</p>
      <br></br>
      <span>
        <h5 style={{ display: "inline-block" }}>Comments</h5>
        <button onClick={handleClick}>Leave a Comment</button>
      </span>
      {commentForm ? (
        <CommentForm
          blog={blog}
          currentUser={currentUser}
          onAddComment={handleAddComment}
        />
      ) : null}
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
      <NavLink to={"/blogs"}>
        <p>Return to Blogs</p>
      </NavLink>
    </div>
  );
}

export default BlogPage;
