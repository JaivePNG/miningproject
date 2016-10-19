import React from 'react'

import ProjectItem from './ProjectItem'

export default React.createClass({
  render () {
    return (
      <div className="project-list">
        {this.props.posts.map((projectItem) => {
          return <ProjectItem
          id={projectItem.id}
          key={projectItem.id}
          title={projectItem.title} />
        })
      }
      </div>
    )
  }

})
