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
            👍
          </span>
        </button>
        <button>
          <span role="img" aria-label="dislike">
            👎
          </span>
        </button>
      </li>
    </ul>
  );
}

export default CommentCard;
