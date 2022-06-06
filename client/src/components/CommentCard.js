import React from "react";
import Button from "react-bootstrap/Button";

function CommentCard({ comment, updateComment }) {
  function addLike(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/comments/${comment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: parseInt(comment.likes) + 1,
      }),
    })
      .then((r) => r.json())
      .then((updatedComment) => updateComment(updatedComment));
  }

  function addDislike(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/comments/${comment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dislikes: parseInt(comment.dislikes) + 1,
      }),
    })
      .then((r) => r.json())
      .then((updatedComment) => updateComment(updatedComment));
  }

  return (
    <ul style={{ listStyleType: "none" }}>
      <li>
        <p>
          {comment.content} - {comment.user.username}
        </p>

        <Button variant="outline-success" onClick={addLike}>
          <span role="img" aria-label="like">
            👍{comment.likes}
          </span>
        </Button>
        <Button variant="outline-danger" onClick={addDislike}>
          <span role="img" aria-label="dislike">
            👎{comment.dislikes}
          </span>
        </Button>
      </li>
    </ul>
  );
}

export default CommentCard;
