const router = require('express').Router()
const db = require('../db')
const jwt = require('jwt-simple')

// this route checks if email provided by user is stored
// if email is found, we encode user's id with a salt and send back as json
// that token contains id number which will checked again in middleware (passport.js)
// salt provided here should be same as middleware

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
				res.json({success: false})
			}else{
				let token = jwt.encode(user.get('id'), 'dawg')
				res.json({success: true, token:'JWT '+token})
			}

		})
	})

module.exports = router
