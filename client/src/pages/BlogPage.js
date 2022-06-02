import React from "react";
import { NavLink } from "react-router-dom";
import CommentCard from "../components/CommentCard";

function BlogPage({ blog }) {
  // const [commentForm, setCommentForm] = useState(false)

  //   function handleClick() {
  //     setCommentForm((commentForm) => !commentForm);
  //   }

  return (
    <div>
      <h1>{blog.title}</h1>
      <h3>{blog.topic}</h3>
      <h4>Author: {blog.user.username}</h4>
      <p>{blog.content}</p>
      <br></br>
      <span>
        <h5 style={{ display: "inline-block" }}>Comments</h5>
        <button>Leave a Comment</button>
      </span>
      {blog.comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
      <NavLink to={"/blogs"}>
        <p>Return to Blogs</p>
      </NavLink>
    </div>
  );
}

export default BlogPage;
