import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function CommentForm({ blog, currentUser, onAddComment }) {
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const commentData = {
      content: content,
      blog_id: blog.id,
      user_id: currentUser.id,
      likes: 0,
      dislikes: 0,
    };
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newComment) => onAddComment(newComment));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
      setContent("");
    });
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Comment:
            <input
              type="text"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          {errors ? errors.map((err) => <p key={err}>{err}</p>) : null}
          <Button type="submit">Leave Comment</Button>
        </form>
      </div>
    </>
  );
}

export default CommentForm;
