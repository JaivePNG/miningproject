import React from 'react'

import Header from './Header'
<<<<<<< HEAD
import ProjectItem from './ProjectItem'
import ProjectList from './ProjectList'
import AddProject from './AddProject'
=======
import AddProject from './AddProject'
import ProjectList from './ProjectList'
>>>>>>> bc603f95bfeb8f96c0f00da066336d8a2c3a6fb6
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
<<<<<<< HEAD
        <ProjectList
          posts={this.state.posts} />
      </div>
=======
          <ProjectList
          posts={this.state.posts}

          />
        </div>
>>>>>>> bc603f95bfeb8f96c0f00da066336d8a2c3a6fb6
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
