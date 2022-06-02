import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Blogs from "./components/Blogs";
import BlogPage from "./pages/BlogPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
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
    console.log(updatedBlog);
    setBlogs(updatedBlogs);
  }

  function handleDelete(deletedBlog) {
    const updatedBlogs = blogs.filter((blog) => blog.id !== deletedBlog.id);
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
            handleDelete={handleDelete}
          />
        </Route>
        <Route exact path="/blogs">
          <Blogs blogs={blogs} selectedBlog={setSelectedBlog} />
        </Route>
        <Route exact path={`/blogs/${selectedBlog.id}`}>
          <BlogPage blog={selectedBlog} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
