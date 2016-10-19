exports.seed = function(knex, Promise) {
  return knex('posts').del()
    .then(function () {
<<<<<<< HEAD
      return knex('posts').insert({id: 1, title: 'Catchment Wall', body: 'Project Discussion on the Wall'})
=======
      return Promise.all([
        knex('posts').insert({title: 'this is the first project'})
      ])
>>>>>>> bc603f95bfeb8f96c0f00da066336d8a2c3a6fb6
    })
}
