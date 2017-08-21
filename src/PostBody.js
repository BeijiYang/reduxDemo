import React, { Component } from 'react'
import './post-body.css'

import { connect } from 'react-redux'

class PostBody extends Component {

  like = () => {
    this.props.dispatch({type: 'ADD_LIKE', 'postId': this.props.postId})
  }

  render() {
    let postId = this.props.postId
    let thisComments = this.props.comments.filter(
      (item) => ( item.post === postId)
    )
    let thisLike = this.props.posts.find(
      (item) => ( item.id === postId)
    )

    return (
      <div className="post-body">
        PostBody
        <div className="num-wrap">
          <div className="like-num" onClick={ this.like }>
            {thisLike.like} like 
          </div>
          <div className="comment-num">
            {thisComments.length} comments
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments,
  posts: state.posts
})

export default connect(mapStateToProps)(PostBody)
