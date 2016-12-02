const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const passport = require('passport')
require('./passport')(passport)

// Routes
const posts = require('./routes/posts')
const tags = require('./routes/tags')
const user = require('./routes/user')
const authenticate = require('./routes/authenticate')
// ----

app.use(morgan('dev'))

app
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: true}))
	.use(passport.initialize())
	// .use('/user', passport.authenticate('jwt', {session:false}), user)
	.use('/user', user)
	.use('/posts', posts)
	.use('/tags', tags)
	.use('/authenticate', authenticate)
	.get('/', (req, res, next) => {
		res.json({msg: 'This is home'})
	})


app.listen(3000)
console.log('Server started at localhost:3000')