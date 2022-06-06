import React from "react";

function CommentCard({ comment, updateComment }) {
  console.log(comment);

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
    <ul>
      <li>
        <p>
          {comment.content} - {comment.user.username}
        </p>

        <button onClick={addLike}>
          <span role="img" aria-label="like">
            👍{comment.likes}
          </span>
        </button>
        <button onClick={addDislike}>
          <span role="img" aria-label="dislike">
            👎{comment.dislikes}
          </span>
        </button>
      </li>
    </ul>
  );
}

export default CommentCard;
