import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

function BlogCard({ blog, setSelectedBlog, addViewCount }) {
  function handleClick() {
    setSelectedBlog(blog);
    addViewCount(blog);
  }

  return (
    <Container>
      <Card style={{ width: "18rem" }} bg="light" border="dark">
        <NavLink to={`/-blogs/${blog.id}`} exact onClick={handleClick}>
          <Card.Title>{blog.title}</Card.Title>
        </NavLink>
        <p>Posted by: {blog.user.username}</p>
        <small className="text-muted">Views: {blog.views}</small>
      </Card>
    </Container>
  );
}

export default BlogCard;
