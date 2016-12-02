
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts_tags', (table) => {
		table.increments()
  	table.integer('post_id').unsigned()
  	table.foreign('post_id').references('posts.id')
  	table.integer('tag_id').unsigned()
  	table.foreign('tag_id').references('tags.id')
  	
	})
};

exports.down = function(knex, Promise) {
  return knex.schema
  	.dropTable('post_id')
  	.dropTable('tag_id')
  	.dropTable('post_tag')
};
