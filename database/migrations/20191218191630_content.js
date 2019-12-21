
exports.up = function(knex) {
  return knex.schema
  .createTable('content', t => {
      t.increments('content_id')
      t.string('originalPoster', 500)
      t.string('content')
      t.string('piece')
      t.string('commentPoster', 500)
        .notNullable()
      t.bigInteger('rating')
        .notNullable()
      t.string('comment', 5000)
        .notNullable()
     t.integer('save_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('content')
};
