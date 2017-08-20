import React, { Component } from 'react';
import "./comment-box.css";

class CommentBox extends Component {
  state = {
    comments: [
      'comment1',
      'comment2'
    ]
  }

  onSubmit = e => {
    e.preventDefault()
    let comments = this.state.comments.slice()
    let content = this.commentInput.value
    comments.push(content)
    this.setState(
      {comments}
    )
    this.commentInput.value = ''
  }

  render() {
    let commentList = this.state.comments.slice().reverse().map(
      (item,i) => (<li key={i}>{item}</li>)
    )

    let commentForm = (
      <form onSubmit={this.onSubmit}>
        <input type='text' ref={value => this.commentInput = value} />
        <button type='sumbit'>Sumbit</button>
      </form>
    )

    return (
      <div className="comment-box">
        <div className="form">
          {commentForm}
        </div>
        <ul className='comment-list'>
          {commentList}
        </ul>
      </div>
    );
  }
}

export default CommentBox;
