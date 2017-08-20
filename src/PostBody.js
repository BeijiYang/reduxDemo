import React, { Component } from 'react'
import './post-body.css'

import { connect } from 'react-redux'

class PostBody extends Component {
  render() {
    return (
      <div className="post-body">
        PostBody
        <div className="comment-num">
          {this.props.comments.length} comments
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state
})

export default connect(mapStateToProps)(PostBody)
