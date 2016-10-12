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
  },

  add: function (req, res) {
    db.add(req.body)
    .then(function (newIds) {
      res.json({newId: newIds[0]})
    })
    .catch(function(err) {
      res.sendStatus(500)
    })
  }

  // update: function (req, res) {
  //   db.update(req.body)
  //   .where('id', '=', req.params.id)
  //   .then(function () {
  //     res.send(200)
  //   })
  //   .catch(function (err) {
  //     res.send(err.message).status(500)
  //   })
  // }
}

//add comments
