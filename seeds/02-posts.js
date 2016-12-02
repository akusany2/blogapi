const faker = require('faker')

function createPosts(knex){
  return knex('posts')
    .insert({
      title: faker.lorem.words(),
      text: faker.lorem.sentence(),
      user_id: Math.floor((Math.random()*4) + 1)
    })
}

exports.seed = function(knex, Promise) {

  return knex('posts')
    .then(() => {
      let records = []

      for(let i = 0; i < 15; i++){
        records.push(createPosts(knex))
      }

      return Promise.all(records)
    })
  
};
