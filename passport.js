
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const db = require('./db')

module.exports = function(passport){
	const opts = {
		secretOrKey: 'dawg',
		jwtFromRequest : ExtractJwt.fromAuthHeader()
	}

	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
		console.log(jwt_payload)


		return done(null, {username: 'asd'})
	}))
}