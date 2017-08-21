import React, { Component } from 'react';
import PostBody from './PostBody';
import CommentBox from './CommentBox';
import './Post.css';

class Post extends Component {
  render() {
    let { id } = this.props.match.params

    return (
      <div className="Post">
        <div className="upper">
           <PostBody postId= { id } />
         </div>
         <div className="bottom">
           <CommentBox postId={ id } />
         </div>
      </div>

    );
  }
}

export default Post;
