import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import BlogEditor from "../components/BlogEditor";

function WelcomePage({ currentUser, setCurrentUser, updateBlog, deleteBlog }) {
  // const [editBlog, setEditBlog] = useState(false);
  const [content, setContent] = useState(currentUser.blogs);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
      }
    });
  }

  // function handleUpdateBlog(updatedBlog) {
  //   const updatedBlogs = content.map((blog) => {
  //     if (blog.id === updatedBlog.id) {
  //       return updatedBlog;
  //     } else {
  //       return blog;
  //     }
  //   });
  //   setContent(updatedBlogs);
  //   setEditBlog(false);
  //   updateBlog(updatedBlog);
  // }

  // function handleDelete(deletedBlog) {
  //   const updatedBlogs = content.filter((blog) => blog.id !== deletedBlog.id);
  //   setContent(updatedBlogs);
  //   deleteBlog(deletedBlog);
  // }

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
        {/* <Button onClick={() => setEditBlog((editBlog) => !editBlog)} size="sm">
          {!editBlog ? "Edit Content" : "Close Edit Page"}
        </Button> */}
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
    </div>
  );
}

export default WelcomePage;
