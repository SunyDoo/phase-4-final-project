import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function EditBlog({ blog, onUpdateBlog, currentUser, handleDelete }) {
  const [title, setTitle] = useState(blog.title);
  const [topic, setTopic] = useState(blog.topic);
  const [content, setContent] = useState(blog.content);

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/blogs/${blog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        topic: topic,
        content: content,
        user_id: currentUser.id,
      }),
    })
      .then((res) => res.json())
      .then((updatedBlog) => onUpdateBlog(updatedBlog));
  }

  function handleDeleteClick() {
    fetch(`http://localhost:3000/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => handleDelete(blog));
  }

  return (
    <>
      <Form className="edit-title" onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
          <input
            type="text"
            name="title"
            autoComplete="off"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <input
            type="text"
            name="topic"
            autoComplete="off"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Form.Group className="mb-3">
          <textarea
            name="content"
            rows="10"
            cols="100"
            autoComplete="off"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" value="Save" variant="outline-success">
          Save
        </Button>
      </Form>
      <Button variant="outline-danger" size="sm" onClick={handleDeleteClick}>
        Delete Blog
      </Button>
    </>
  );
}

export default EditBlog;
