import React from "react";
import BlogCard from "./BlogCard";

function Blogs({ blogs, selectedBlog, addViewCount }) {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            selectedBlog={selectedBlog}
            addViewCount={addViewCount}
          />
        ))}
      </div>
    </>
  );
}

export default Blogs;
