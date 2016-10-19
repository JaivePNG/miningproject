import React from 'react'

let addTitle = null

export default React.createClass({
  render() {
    return (
      <div className ='add-Title'>
        <input
          id="new-post"
          title="new-post"
          placeholder="Add Your Comment"
          ref={function (input){addTitle = input
          }}/>
        <button id="add-comment"
            onClick={ () => this.props.add(addTitle.value)}>Add</button>
      </div>
    )
  }
})
