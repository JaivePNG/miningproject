var config = require('../knexfile').development
var db = require('knex')(config)

module.exports = {
  projectLists: function () {
    return db('posts').select()
  }
}
