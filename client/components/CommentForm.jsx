import React from 'react'

export default React.createClass({
  render() {
    return (
        <form method='post'>
          <input type='submit' value='Submit' /><br />
          <textarea name='comment' id='comment'></textarea><br />
          <input type='hidden' name='articleid' id='articleid' value='<? echo $_GET["id"]; ?>' />

        </form>
    )
  }
  })
