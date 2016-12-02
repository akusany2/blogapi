const faker = require('faker')

function createUsers(knex) {
  return knex('users').insert({
    email: faker.internet.exampleEmail().toLowerCase(),
    password: 'asd'
  })
}  

exports.seed = function(knex, Promise) {
  return knex('users')
    .then(() => {
      let records = []

      for(let i= 0; i < 5; i++){
        records.push(createUsers(knex))
      }

      return Promise.all(records)
    })
 
};
