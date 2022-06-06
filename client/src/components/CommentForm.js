import React, { useState } from "react";

function CommentForm({ blog, currentUser, onAddComment }) {
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const commentData = {
      content: content,
      blog_id: blog.id,
      user_id: currentUser.id,
      likes: 0,
      dislikes: 0,
    };
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((r) => r.json())
      .then((newComment) => onAddComment(newComment));
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
          <button type="submit">Leave Comment</button>
        </form>
      </div>
    </>
  );
}

export default CommentForm;
