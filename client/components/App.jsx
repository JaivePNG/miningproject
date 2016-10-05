import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Comments from './Comments'
import CommentForm from './CommentForm'

export default React.createClass({
  render() {
    return (
      <div>
          <Header />
          <Navigation />
          <Comments />
          <CommentForm />
      </div>
    )
  }
  })
