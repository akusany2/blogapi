const router = require('express').Router()

// get all posts
// get single post based on id
// post single post

router
	.get('/', (req, res, next) => {
		res.json({msg: 'All post comes here'})
	})
	.get('/:id', (req, res, next) => {
		res.json({msg: 'Single post comes here', id: req.params.id})
	})

	.get('/new-post', (req, res, next) => {
		res.json({msg: 'New post form with tags, category etc will come here'})
	})
	.post('/new-post', (req, res, next) => {
		res.json({msg: 'Posted a new post'})
	})


module.exports = router