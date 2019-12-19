
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'admin', password: 'adminPass', email: 'adminOps@admin.com'}, //1
        {username:'user', password: 'user23', email: 'user@gmail.com'}, //2
        {username:'tom', password: 'dnharry', email: 'tdharry@aol.com'}, //3
        {username: 'kelly', password: 'dmiff', email: 'kdiff@yahoo.com'},
        {username: 'john', password: 'smith', email: 'smith@true.com'},
        {username: 'cori', password: 'cori', email: 'c@gmail.com'}
      ]);
    });
};
