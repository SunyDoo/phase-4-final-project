import React, { useState } from "react";
import EditBlog from "../components/EditBlog";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

function WelcomePage({
  currentUser,
  setCurrentUser,
  updateBlog,
  handleDelete,
}) {
  const [editBlog, setEditBlog] = useState(false);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
      }
    });
  }

  function handleUpdateBlog(updatedBlog) {
    setEditBlog(false);
    updateBlog(updatedBlog);
  }

  return (
    <div>
      <h1>Welcome {currentUser.username}</h1>
      <button onClick={handleLogoutClick}>Log Out</button>
      <br></br>
      <h3>Your Content</h3>
      <Container>
        <CardGroup>
          {currentUser.blogs.map((blog) => (
            <div key={blog.id}>
              <Card style={{ height: "5rem" }} bg="light" border="dark">
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
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
              <Button
                onClick={() => setEditBlog((editBlog) => !editBlog)}
                size="sm"
              >
                Edit Blog
              </Button>
            </div>
          ))}
        </CardGroup>
      </Container>
    </div>
  );
}

export default WelcomePage;
