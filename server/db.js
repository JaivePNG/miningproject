var config = require('../knexfile').development
var db = require('knex')(config)

module.exports = {
  projectList: function () {
    return db('posts').select()
  },

  add: function (post) {
    return db('posts').insert({
      title: post.text
      // body: post.text
    })
  }
}
