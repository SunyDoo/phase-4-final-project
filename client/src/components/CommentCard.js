import React from "react";

function CommentCard({ comment }) {
  return (
    <ul>
      <li>
        <p>
          {comment.content} - {comment.user.username}
        </p>

        <button>
          <span role="img" aria-label="like">
            👍{comment.likes}
          </span>
        </button>
        <button>
          <span role="img" aria-label="dislike">
            👎{comment.dislikes}
          </span>
        </button>
      </li>
    </ul>
  );
}

export default CommentCard;
