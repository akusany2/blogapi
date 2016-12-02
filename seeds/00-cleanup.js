const knex = require('knex')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    // Inserts seed entries
    
    // knex.schema.table('post_tag', (table) => {
    // 	table.dropForeign('post_id', 'posts.id'),
    // 	table.dropForeign('tag_id', 'tags.id')
    // }),
    // knex('post_tag').truncate(),
    // knex('posts').truncate(),
    // knex('tags').truncate(),
    // knex('users').truncate()
  )
};
