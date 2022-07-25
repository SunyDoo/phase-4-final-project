import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Blogs from "./components/Blogs";
import BlogPage from "./pages/BlogPage";
import WelcomePage from "./pages/WelcomePage";
import BlogForm from "./pages/BlogForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { config } from "./Constants";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch(`${config.url}/blogs`)
      .then((res) => res.json())
      .then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  if (!currentUser) return <Login setCurrentUser={setCurrentUser} />;

  function updateBlog(updatedBlog) {
    const updatedBlogs = blogs.map((blog) => {
      if (blog.id === updatedBlog.id) {
        return updatedBlog;
      } else {
        return blog;
      }
    });
    setBlogs(updatedBlogs);
  }

  function handleDelete(deletedBlog) {
    const updatedBlogs = blogs.filter((blog) => blog.id !== deletedBlog.id);
    console.log(deletedBlog);
    setBlogs(updatedBlogs);
    const updatedUser = currentUser;
    updatedUser.blogs.filter((blog) => blog.id !== deletedBlog.id);
    setCurrentUser(updatedUser);
  }

  function handleAddBlog(newBlog) {
    setBlogs((blogs) => [...blogs, newBlog]);
    const updatedUser = currentUser;
    updatedUser.blogs.push(newBlog);
    setCurrentUser(updatedUser);
  }

  function addViewCount(blog) {
    fetch(`${config.url}/blogs/${blog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        views: parseInt(blog.views) + 1,
      }),
    })
      .then((r) => r.json())
      .then((updatedBlog) => onUpdateBlog(updatedBlog));
  }

  function onUpdateBlog(updatedBlog) {
    const updatedBlogs = blogs.map((blog) => {
      if (blog.id === updatedBlog.id) {
        return updatedBlog;
      } else {
        return blog;
      }
    });
    setBlogs(updatedBlogs);
  }

  return (
    <div className="App">
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Switch>
        <Route exact path="/">
          <WelcomePage
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            updateBlog={updateBlog}
            deleteBlog={handleDelete}
            blogs={blogs}
          />
        </Route>
        <Route exact path="/-blogs">
          <Blogs
            blogs={blogs}
            setSelectedBlog={setSelectedBlog}
            addViewCount={addViewCount}
          />
        </Route>
        <Route exact path={`/-blogs/:id`}>
          <BlogPage
            selectedBlog={selectedBlog}
            currentUser={currentUser}
            setSelectedBlog={setSelectedBlog}
            url={URL}
          />
        </Route>
        <Route exact path="/-createpost">
          <BlogForm
            currentUser={currentUser}
            onAddBlog={handleAddBlog}
            url={URL}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
