import React from 'react'

import ProjectItem from './ProjectItem'

export default React.createClass({
  render () {
    return (
      <div className="project-list">
        {this.props.posts.map((projectItem) => {
          return <ProjectItem
<<<<<<< HEAD
          id={projectItem.id}
          key={projectItem.id}
          title={projectItem.title} />
        })
      }
=======
            id={projectItem.id}
            key={projectItem.id}
            title={projectItem.title} />
        })}
>>>>>>> bc603f95bfeb8f96c0f00da066336d8a2c3a6fb6
      </div>
    )
  }

})
