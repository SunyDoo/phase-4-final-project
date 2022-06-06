import React from "react";
import BlogCard from "./BlogCard";

function Blogs({ blogs, selectedBlog, addViewCount }) {
  return (
    <>
      <div>
        <ul style={{ listStyleType: "none" }}>
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              selectedBlog={selectedBlog}
              addViewCount={addViewCount}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Blogs;
