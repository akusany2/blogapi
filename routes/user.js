const router = require('express').Router()


router
	.get('/' ,(req, res, next) => {
		// if fetchAll - req.user = [{"id":1,"email":"carolyne24@example.com","password":"asd","created_at":"2016-12-03T09:22:38.000Z","updated_at":"0000-00-00 00:00:00"}]

		// use .get('email') as it is a bookshelf object
		let email = req.user.get('email')

		// console.log(req.headers);
		res.json(email)
	})
	.post('/', (req, res, next) => {
		res.send('New user will come here')
	})


module.exports = router
