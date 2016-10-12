import React from 'react'

import Header from './Header'
import AddProject from './AddProject'
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
          <AddProject add={this.addProject} />
        </div>
        <div>
          <ProjectList
          posts={this.state.posts}

          />
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
