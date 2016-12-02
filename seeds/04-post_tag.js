// const faker = require('faker')

function createPosts(knex){
  return knex('posts_tags')
    .insert({
      post_id: Math.floor((Math.random()*14) + 1),
      tag_id: Math.floor((Math.random()*2) + 1)
    })
}

exports.seed = function(knex, Promise) {

  return knex('posts_tags')
    .then(() => {
      let records = []

      for(let i = 0; i < 15; i++){
        records.push(createPosts(knex))
      }

      return Promise.all(records)
    })
  
};
