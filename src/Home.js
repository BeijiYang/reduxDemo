import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

import { connect } from 'react-redux'

class Home extends Component {
  render() {
    let postList = this.props.posts.slice().map(
      (item) => (
        <Link key={item.id} to={`/post/${item.id}`} className="post-item">
          {item.title}
        </Link>
      )
    )

    return (
      <div className="home">
        <ul>
          {postList}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Home)
