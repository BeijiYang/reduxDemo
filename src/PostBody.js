import React, { Component } from 'react'
import './post-body.css'

import { connect } from 'react-redux'

class PostBody extends Component {
  render() {
    let postId = this.props.postId
    let thisComments = this.props.comments.filter(
      (item) => ( item.post === postId)
    )

    return (
      <div className="post-body">
        PostBody
        <div className="comment-num">
          {thisComments.length} comments
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments
})

export default connect(mapStateToProps)(PostBody)
