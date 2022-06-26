import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import BlogEditor from "../components/BlogEditor";

function WelcomePage({
  currentUser,
  setCurrentUser,
  updateBlog,
  deleteBlog,
  blogs,
}) {
  const [content, setContent] = useState(
    blogs.filter((blog) => blog.user.id === currentUser.id)
  );
  useEffect(() => {
    setContent(blogs.filter((blog) => blog.user.id === currentUser.id));
  }, [blogs, currentUser]);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
      }
    });
  }
  const commentedBlogs = [];
  const uniqueBlogs = currentUser.commented_blogs.filter((blog) => {
    const isDuplicate = commentedBlogs.includes(blog.id);

    if (!isDuplicate) {
      commentedBlogs.push(blog.id);

      return true;
    }

    return false;
  });


  return (
    <div>
      <div>
        <div>
          <h1>Welcome {currentUser.username}</h1>
          <Image
            src={currentUser.avatar}
            width="75"
            height="75"
            className="d-inline-block align-top"
            alt="Sunil's Gym Logo"
            roundedCircle
          />
        </div>
        <Button variant="outline-secondary" onClick={handleLogoutClick}>
          Log Out
        </Button>
        <br></br>
        <h3>Your Content</h3>
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
            <BlogEditor
              key={blog.id}
              blog={blog}
              currentUser={currentUser}
              updateBlog={updateBlog}
              deleteBlog={deleteBlog}
              setContent={setContent}
              content={content}
            />
          ))}
        </CardGroup>
      </Container>
      <div>
        <p>Blogs you've commented on:</p>
        {uniqueBlogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </div>
    </div>
  );
}

export default WelcomePage;
