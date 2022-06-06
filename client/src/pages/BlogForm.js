import React, { useState } from "react";

function BlogForm({ currentUser, onAddBlog }) {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const blogData = {
      title: title,
      topic: topic,
      content: content,
      user_id: currentUser.id,
      views: 0,
    };
    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    })
      .then((r) => r.json())
      .then((blogData) => onAddBlog(blogData));
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Topic:
            <input
              type="text"
              name="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </label>
          <label>
            Content:
            <input
              type="text"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
          <button type="submit">Make Post</button>
        </form>
      </div>
    </>
  );
}

export default BlogForm;
