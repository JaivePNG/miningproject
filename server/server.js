var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var PORT = process.env.PORT || 3000
var app = express()

var routes = require('./routes')


app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))
// -- //
app.get('/v1/list', routes.projectList)
app.post('/v1/add', routes.add)
// app.put('/v1/update/:id', routes.update)
//
// app.post('v1/add', routes.addComment)
//
app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
