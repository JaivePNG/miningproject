var db = require('./db')

module.exports = {
  projectList: function(req, res){
    db.projectList()
    .then(function (posts) {
      res.json(posts)
    })
    .catch(function (err){
      resendStatus(500)
    })
  }
}

//add comments
