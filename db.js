const config = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)
const bookshelf = require('bookshelf')(knex)

const User = bookshelf.Model.extend({
	tableName: 'users'
})

const Post = bookshelf.Model.extend({
	tableName: 'posts'
})

module.exports = {
	User: User,
	Post: Post
}