
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const db = require('./db')

module.exports = function(passport){
	const opts = {
		secretOrKey: 'dawg',
		jwtFromRequest : ExtractJwt.fromAuthHeader()
	}

	passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
		console.log(`jwt_payload(passport.js): ${jwt_payload}`)
		// jwt_payload is the ID - got from authenticate.js jwt.encode (id)
		db
			.User
			.where('id', jwt_payload)
			.fetch()
			.then((user) => {
				done(null, user)

			})
			.catch(err => {
				return done(err, false)
			})

	}))
}
