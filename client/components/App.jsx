import React from 'react'

import Header from './Header'
import Navigation from './Navigation'
import Comments from './Comments'
import CommentForm from './CommentForm'

import ProjectItem from './ProjectItem'
import ProjectList from './ProjectList'
import projectApi from '../projectApi'
import AddProject from './AddProject'

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
          <AddProject add={this.addProject} />
        </div>
        <div>
        <projectList
          posts={this.state.posts} />
      </div>
      </div>

    )
  },


addProject (projectTitle) {
  const project = {
    title: projectTitle
  }
  projectApi.add(project, (err, newProject) => {
    if (!err) {
      const newState = {
        posts: [...this.state.posts, newProject]
      }
      this.setState(newState)
    }
  })
 }
})
