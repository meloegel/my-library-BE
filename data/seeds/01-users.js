
exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { id: 1, username: 'Mark', password: 'asdasd', email: 'email@email.com' },
    { id: 2, username: 'Steve', password: 'asdasd', email: 'testemail@email.com' },
    { id: 3, username: 'Bob', password: 'asdasd', email: 'emailtest@email.com' }
  ]);
};
