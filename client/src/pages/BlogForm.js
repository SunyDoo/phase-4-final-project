import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function BlogForm({ currentUser, onAddBlog }) {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("tech");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
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
    setTitle("");
    setTopic("");
    setContent("");
    console.log(blogData);
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
          <label>
            Topic:
            <select
              name="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <option value="tech">tech</option>
              <option value="lifestyle">lifestyle</option>
              <option value="entertainment">entertainment</option>
              <option value="pets">pets</option>
              <option value="miscellaneous">miscellaneous</option>
            </select>
          </label>
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
          <Button type="submit">Make Post</Button>
        </Form>
      </div>
    </>
  );
}

export default BlogForm;
