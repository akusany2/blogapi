// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    debug: true,
    connection: {
      host     : '127.0.0.1',
      user     : 'root',
      password : '',
      database : 'node_blog',
      charset  : 'utf8'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      connection: {
      host     : '127.0.0.1',
      user     : 'root',
      password : '',
      database : 'node_blog',
      charset  : 'utf8'
      }
    }
  }

};
