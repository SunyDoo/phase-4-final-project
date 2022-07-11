import React from "react";
import BlogCard from "./BlogCard";

function Blogs({ blogs, setSelectedBlog, addViewCount }) {
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
            setSelectedBlog={setSelectedBlog}
            addViewCount={addViewCount}
          />
        ))}
      </div>
      {/* <div>
        <button onClick={order}>order</button>
      </div> */}
    </>
  );
}

export default Blogs;
