import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Blogs from "./components/Blogs";
import BlogPage from "./pages/BlogPage";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState([]);
  console.log(selectedBlog);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((r) => r.json())
      .then((blogs) => setBlogs(blogs));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Login />
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
