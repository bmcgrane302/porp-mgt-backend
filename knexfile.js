module.exports = {
  development: {
      client: 'pg',
      connection: 'postgres://localhost/propList',
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          //directory: __dirname + '/db/seeds/production',
          directory: __dirname + '/db/seeds',
        },
    },
};
