const config = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config)
const bookshelf = require('bookshelf')(knex)

const User = bookshelf.Model.extend({
	tableName: 'users'
})

const Post = bookshelf.Model.extend({
	tableName: 'posts',
	hasTimestamps: true,
	tags: function(){
		return this.belongsToMany(Tag)
	}
})

const Tag = bookshelf.Model.extend({
	tableName: 'tags',
	posts: function(){
		return this.belongsToMany(Post).through(PostTag)
	}
})

// Pivot table
const PostTag = bookshelf.Model.extend({
	tableName: 'posts_tags',
	post: function(){
		return this.belongsTo(Post)
	},
	tag: function(){
		return this.belongsTo(Tag)
	}

})

module.exports = {
	User: User,
	Post: Post,
	Tag: Tag
}