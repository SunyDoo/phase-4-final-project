import React from "react";

function WelcomePage({ currentUser, setCurrentUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
      }
    });
  }

  return (
    <div>
      <h1>Welcome {currentUser.username}</h1>
      <button onClick={handleLogoutClick}>Log Out</button>
      <br></br>
      <h3>Your Content</h3>
      <ul>
        {currentUser.blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default WelcomePage;
