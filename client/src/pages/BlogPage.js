import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import CommentForm from "../components/CommentForm";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function BlogPage({ selectedBlog, currentUser, setSelectedBlog }) {
  const [commentForm, setCommentForm] = useState(false);
  const [blog, setBlog] = useState(selectedBlog);
  const [comments, setComments] = useState(selectedBlog.comments);

  useEffect(() => {
    let id = window.location.pathname.split("/")[2];
    if (id) {
      fetch(`http://localhost:3000/blogs/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data);
          setComments(data.comments);
        });
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
        <h1>{blog.title}</h1>
        <h3>{blog.topic}</h3>
        <h4>Author: {blog.user && blog.user.username}</h4>
      </Modal.Title>
      <Modal.Body>
        <p>{blog.content}</p>
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
          blog={blog}
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
