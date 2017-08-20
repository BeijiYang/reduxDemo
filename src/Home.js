import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

class Home extends Component {
  state = {
    posts: [
      {
        'id': '0',
        'title': 'Post0'
      },
      {
        'id': '1',
        'title': 'Post1'
      },
      {
        'id': '2',
        'title': 'Post2'
      }
  ]}

  render() {
    let postList = this.state.posts.slice().map(
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

export default Home
