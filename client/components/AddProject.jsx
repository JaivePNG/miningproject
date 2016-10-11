import React from 'react'

let addComment = null

export default React.createClass({
  render() {
    return (
      <div className ='add-Comment'>
        <input
          id="new-post"
          title="new-post"
          placeholder="Add Your Comment"
          ref={function (input){addComment = input
          }}/>
        <button id="add-comment"
            onClick={ () => this.props.add(addComment.value)}>Add</button>
      </div>
    )
  }
})
