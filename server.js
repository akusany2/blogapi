const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

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
	.use(cors())
	// .use((req, res, next) => {
	// 	// for application/json Content-Type from axios
	// 	// res.setHeader("Access-Control-Allow-Headers", "Content-Type")
	// 	res.setHeader('Access-Control-Allow-Origin', '*');
	// 	res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	// 	res.setHeader('Access-Control-Allow-Credentials', true);
	// 	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	//
	// 	return next()
	// })
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: true}))
	.use(passport.initialize())
	.use('/user', passport.authenticate('jwt', {session:false}), user)
	// .use('/user', user)
	.use('/posts', posts)
	.use('/tags', tags)
	.use('/authenticate', authenticate)
	.get('/', (req, res, next) => {
		res.json({msg: 'This is home'})
	})


app.listen(3001)
console.log('Server started at localhost:3001')
