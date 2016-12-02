const router = require('express').Router()
const db = require('../db')

router
	.get('/', (req, res, next) => {
		db
			.Tag
			.fetchAll()
			.then((data)=> {
				res.json(data)
			})
	})

module.exports = router