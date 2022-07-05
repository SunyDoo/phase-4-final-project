import React from "react";
import BlogCard from "./BlogCard";

function Blogs({ blogs, setSelectedBlog, addViewCount }) {
  // const [orderedBlogs, setOrderedBlogs] = useState([]);

  // function order() {
  //   fetch("http://localhost:3000/order")
  //     .then((res) => res.json())
  //     .then((data) => setOrderedBlogs(data));
  // }

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
        {blogs.map((blog)=>(
            <BlogCard
              key={blog.id}
              blog={blog}
              setSelectedBlog={setSelectedBlog}
              addViewCount={addViewCount}
            />
          )
        )}
      </div>
      {/* <div>
        <button onClick={order}>order</button>
      </div> */}
    </>
  );
}

export default Blogs;
