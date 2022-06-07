import React, { useState } from "react";
import EditBlog from "../components/EditBlog";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

function WelcomePage({ currentUser, setCurrentUser, updateBlog }) {
  const [editBlog, setEditBlog] = useState(false);
  const [content, setContent] = useState(currentUser.blogs);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
      }
    });
  }

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
  }

  return (
    <div>
      <div>
        <h1>Welcome {currentUser.username}</h1>
        <Button variant="outline-secondary" onClick={handleLogoutClick}>
          Log Out
        </Button>
        <br></br>
        <h3>Your Content</h3>
        <Button onClick={() => setEditBlog((editBlog) => !editBlog)} size="sm">
          {!editBlog ? "Edit Content" : "Close Edit Page"}
        </Button>
      </div>
      <Container>
        <CardGroup
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
          }}
        >
          {content.map((blog) => (
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
              {editBlog ? (
                <EditBlog
                  blog={blog}
                  currentUser={currentUser}
                  onUpdateBlog={handleUpdateBlog}
                  handleDelete={handleDelete}
                />
              ) : null}
            </div>
          ))}
        </CardGroup>
      </Container>
    </div>
  );
}

export default WelcomePage;
