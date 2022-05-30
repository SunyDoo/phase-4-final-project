import React from "react";
import { NavLink } from "react-router-dom";

function BlogCard({ blog, selectedBlog }) {
  function handleClick() {
    selectedBlog(blog);
  }

  return (
    <li>
      <NavLink to={`/blogs/${blog.id}`} exact onClick={handleClick}>
        <h1>{blog.title}</h1>
      </NavLink>
      <p>Posted by: {blog.user.username}</p>
      <p>Views: {blog.views}</p>
    </li>
  );
}

export default BlogCard;
