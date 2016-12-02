const faker = require('faker')

function createTags(knex){
  return knex('tags')
    .insert({
      name: faker.lorem.word()
    })
}

exports.seed = function(knex, Promise) {

  return knex('tags')
    .then(() => {
      let records = []

      for(let i = 0; i < 3; i++){
        records.push(createTags(knex))
      }

      return Promise.all(records)
    })
  
};
