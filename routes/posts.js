const router = require('express').Router()
const db = require('../db')

// get all posts
// get single post based on id
// post single post

router
	.get('/', (req, res, next) => {
		db
			.Post
			.fetchAll()
			.then((data)=>{
				return res.json(data)
			})
		
	})
	.get('/:id', (req, res, next) => {
		db
			.Post
			.where('id', req.params.id)
			.fetch({withRelated: ['tags'], require:true})
			.then((data)=> {
				return res.json({data})
			})
	})

	.get('/new-post', (req, res, next) => {
		res.json({msg: 'New post form with tags, category etc will come here'})
	})
	.post('/new-post', (req, res, next) => {
		res.json({msg: 'Posted a new post'})
	})


module.exports = router