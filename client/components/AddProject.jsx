import React from 'react'

let addTitle = null

export default React.createClass({
  render() {
    return (
      <div className ='add-Title'>
        <input
<<<<<<< HEAD
          id="new-post"
          title="new-post"
          placeholder="Add Your Comment"
          ref={function (input){addTitle = input
=======
          id = "new-post"
          title = "new-post"
          placeholder = "Add Your project"
          ref = {function (input) {
            addTitle = input
>>>>>>> bc603f95bfeb8f96c0f00da066336d8a2c3a6fb6
          }}/>
        <button id="add-comment"
            onClick={ () => this.props.add(addTitle.value)}>Add</button>
      </div>
    )
  }
})
