// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    debug: true,
    connection: {
      host     : '127.0.0.1',
      user     : 'root',
      password : 'root',
      database : 'node_blog',
      charset  : 'utf8',
      socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      connection: {
      host     : '127.0.0.1',
      user     : 'root',
      password : 'root',
      database : 'node_blog',
      charset  : 'utf8'
      }
    }
  }

};
