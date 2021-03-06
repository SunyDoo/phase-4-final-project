import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { config } from "../Constants";

function BlogForm({ currentUser, onAddBlog, url }) {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("tech");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

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
    fetch(`${config.url}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    }).then((res) => {
      if (res.ok) {
        res.json().then((blogData) => onAddBlog(blogData));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
    setTitle("");
    setTopic("");
    setContent("");
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
        {errors ? errors.map((err) => <p key={err}>{err}</p>) : null}
      </div>
    </>
  );
}

export default BlogForm;
