import React, { useState } from "react";
import EditBlog from "../components/EditBlog";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function BlogEditor({
  blog,
  currentUser,
  updateBlog,
  deleteBlog,
  setContent,
  content,
}) {
  const [editBlog, setEditBlog] = useState(false);

  function handleUpdateBlog(updatedBlog) {
    const updatedBlogs = content.map((blog) => {
      if (blog.id === updatedBlog.id) {
        return updatedBlog;
      } else {
        return blog;
      }
    });
    setContent(updatedBlogs);
    setEditBlog(false);
    updateBlog(updatedBlog);
  }
  function handleDelete(deletedBlog) {
    const updatedBlogs = content.filter((blog) => blog.id !== deletedBlog.id);
    setContent(updatedBlogs);
    deleteBlog(deletedBlog);
  }
  return (
    <div key={blog.id}>
      <Card style={{ height: "5rem" }} bg="light" border="dark">
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {blog.topic}
          </Card.Subtitle>
        </Card.Body>
      </Card>
      <Card.Footer>
        <small className="text-muted">Total Views: {blog.views}</small>
      </Card.Footer>
      <Button onClick={() => setEditBlog((editBlog) => !editBlog)} size="sm">
        {!editBlog ? "Edit Content" : "Close Edit Page"}
      </Button>
      {editBlog ? (
        <EditBlog
          blog={blog}
          currentUser={currentUser}
          onUpdateBlog={handleUpdateBlog}
          handleDelete={handleDelete}
        />
      ) : null}
    </div>
  );
}

export default BlogEditor;
