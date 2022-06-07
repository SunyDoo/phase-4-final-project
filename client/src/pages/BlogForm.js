import React, { useState } from "react";
import Form from "react-bootstrap/Form";

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
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>
              Title:
              <Form.Control
                type="text"
                name="title"
                size="40"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Topic:
              <Form.Control
                type="text"
                name="topic"
                size="40"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </Form.Label>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              Content:
              <textarea
                name="content"
                rows="20"
                cols="100"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Label>
          </Form.Group>
          <button type="submit">Make Post</button>
        </Form>
      </div>
    </>
  );
}

export default BlogForm;
