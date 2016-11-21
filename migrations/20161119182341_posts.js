
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
  	table.increments()
  	table.string('title')
  	table.string('text')
  	table.integer('user_id').unsigned()
  	table.foreign('user_id').references('users.id')
  	table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts')
};
