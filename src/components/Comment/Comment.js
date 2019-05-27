import React from "react";
import PropTypes from "prop-types";

const Comment = ({ comment }) => {
  return (
    <div>
      <p>
        {comment.text} <b>{comment.user}</b>
      </p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;
