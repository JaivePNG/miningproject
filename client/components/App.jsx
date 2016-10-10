import React from 'react'

import Header from './Header'
import Navigation from './Navigation'
import Comments from './Comments'
import CommentForm from './CommentForm'
import ProjectItem from './ProjectItem'
import ProjectList from './ProjectList'
import projectApi from '../projectApi'

export default React.createClass({
  getInitialState() {
    return {posts: []}
  },

  componentDidMount () {
    projectApi.getPosts((err, list) => {
      if(!err) {
        this.setState({posts: list})
      }
    })
  },

  render() {
    return (
      <div>
        <Header />
      <div>
        <projectList
          posts={this.state.posts} />
      </div>
      </div>

    )
  }
})
