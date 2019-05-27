import React, { Component } from "react";

import Comment from "../Comment";
import toggleOpen from "../decorators/toggleOpen";

class CommentList extends Component {
  static defaultProps = {
    comments: []
  };
  render() {
    const { comments, isOpen } = this.props;
    const text = isOpen ? "hide comments" : "show comments";

    return (
      <div>
        <button
          onClick={this.props.toggleOpen}
          className="btn btn-outline-secondary"
        >
          {text}
        </button>
        {getBody({ comments, isOpen })}
      </div>
    );
  }
}

function getBody({ comments, isOpen }) {
  if (!isOpen) return null;
  if (!comments.length) return <p>No Comments yet</p>;

  return (
    <ul className="list-group">
      {comments.map(comment => (
        <li className="list-group-item" key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  );
}

export default toggleOpen(CommentList);
