exports.seed = function(knex, Promise) {
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert({id: 2, title: 'Catchment Wall', body: 'Project Discussion on the Wall'})
    })
}
