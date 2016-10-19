import React from 'react'

import Header from './Header'
import ProjectItem from './ProjectItem'
import ProjectList from './ProjectList'
import AddProject from './AddProject'
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

// addTodo (todoText) {
//     const todo = {
//       text: todoText,
//       isComplete: false
//     }
//     todoApi.add(todo, (err, newTodo) => {
//       if (!err) {
//         const newState = {
//           todos: [...this.state.todos, newTodo]
//         }
//         this.setState(newState)
//       }
//     })
//   }
// })
