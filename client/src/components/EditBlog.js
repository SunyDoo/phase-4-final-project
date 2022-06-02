import React, { useState } from "react";

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
      <form className="edit-title" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="title"
          autoComplete="off"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="topic"
          autoComplete="off"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <input
          type="text"
          name="content"
          autoComplete="off"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
      <button onClick={handleDeleteClick}>Delete Blog</button>
    </>
  );
}

export default EditBlog;
