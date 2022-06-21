import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import CommentForm from "../components/CommentForm";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function BlogPage({ blog, currentUser }) {
  const [commentForm, setCommentForm] = useState(false);
  const [comments, setComments] = useState(blog.comments);
  const [post, setPost] = useState(blog);

  useEffect(() => {
    let id = window.location.pathname.split("/")[2];
    if (id) {
      fetch(`http://localhost:3000/blogs/${id}`)
        .then((res) => res.json())
        .then((blog) => setPost(blog));
    }
  }, []);

  function handleClick() {
    setCommentForm((commentForm) => !commentForm);
  }

  function handleAddComment(newComment) {
    setComments((comments) => [...comments, newComment]);
  }

  function handleUpdateComment(updatedComment) {
    const updatedComments = comments.map((comment) => {
      if (comment.id === updatedComment.id) {
        return updatedComment;
      } else {
        return comment;
      }
    });
    setComments(updatedComments);
  }

  return (
    <Modal.Dialog>
      <Modal.Title>
        <h1>{post.title}</h1>
        <h3>{post.topic}</h3>
        <h4>Author: {post.user && post.user.username}</h4>
      </Modal.Title>
      <Modal.Body>
        <p>{post.content}</p>
      </Modal.Body>
      <br></br>
      <Modal.Footer
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h5 style={{ display: "inline-block" }}>Comments</h5>
        {!commentForm ? (
          <Button onClick={handleClick}>Leave a Comment</Button>
        ) : null}
      </Modal.Footer>
      {commentForm ? (
        <CommentForm
          blog={post}
          currentUser={currentUser}
          onAddComment={handleAddComment}
        />
      ) : null}
      {comments &&
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            updateComment={handleUpdateComment}
          />
        ))}
      <NavLink to={"/blogs"}>
        <p>Return to Blogs</p>
      </NavLink>
    </Modal.Dialog>
  );
}

export default BlogPage;
