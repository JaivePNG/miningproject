import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className ='project-item'>
        {this.props.title}
      </div>
    )
  }
})
