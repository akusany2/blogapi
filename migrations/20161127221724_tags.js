
exports.up = function(knex, Promise) {
	return knex.schema.createTable('tags', (table) => {
		table.increments()
  	table.string('name')
  	// table.integer('post_id').unsigned()
  	table.timestamps(true)
	})
  	
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tags')
};
