import React from "react";
import BlogCard from "./BlogCard";


function Blogs({ blogs, selectedBlog }) {
  return (
    <>
      <div>
        <ul>
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} selectedBlog={selectedBlog} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Blogs;
