const router = require('express').Router()
const db = require('../db')
const jwt = require('jwt-simple')

router
	.get('/', (req, res, next) => {
		res.json({msg: 'Authentication route'})
	})
	.post('/', (req, res, next) => {

		db
		.User
		.where({
			email: req.body.email
		})
		.fetch()
		.then((user) => {
			if(!user){
				done(null, false, {msg: "User not found!"})
			}else{
				let token = jwt.encode(user.get('id'), 'dawg')
				res.json({success: true, token:'JWT '+token})
			}
			
		})
	})

module.exports = router