import React, { Component } from 'react'
import store from './redux/store'
import "./comment-box.css"

import { connect } from 'react-redux'

class CommentBox extends Component {

  onSubmit = e => {
    e.preventDefault()
    let comment = this.commentInput.value
    store.dispatch({type: 'ADD_COMMENT', comment})

    this.commentInput.value = ''
    console.log(this.props);
  }

  render() {
    let { postId } = this.props
    
    let thisComments = this.props.comments.filter(item => (
      item.post === postId
    ))
    let commentList = thisComments.reverse().map((item, i) => (
      <li key={i}>{item.text}</li>
      ))

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

const mapStateToProps = (state) => ({ //传入状态树
  comments: state.comments
})

export default connect(mapStateToProps)(CommentBox)
