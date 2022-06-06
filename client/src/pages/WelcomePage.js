import React, { useState } from "react";
import EditBlog from "../components/EditBlog";

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
      <ul>
        {currentUser.blogs.map((blog) => (
          <>
            <li key={blog.id}>{blog.title}</li>
            {editBlog ? (
              <EditBlog
                key={blog.title}
                blog={blog}
                currentUser={currentUser}
                onUpdateBlog={handleUpdateBlog}
                handleDelete={handleDelete}
              />
            ) : null}
            <button onClick={() => setEditBlog((editBlog) => !editBlog)}>
              Edit Blog
            </button>
          </>
        ))}
      </ul>
    </div>
  );
}

export default WelcomePage;
