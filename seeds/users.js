exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, username: 'David', password: 'Markham', name: 'David Wau', email: 'david@mine.org' }),
      ]);
    });
};
