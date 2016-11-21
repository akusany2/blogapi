const router = require('express').Router()


router
	.get('/' ,(req, res, next) => {
		res.send('user')
	})
	.post('/', (req, res, next) => {
		res.send('New user will come here')
	})


module.exports = router