const parse = require('pg-connection-string').parse;
const {database, host, password, port, user} = parse(process.env.DATABASE_URL);

module.exports = () => ({
  connection: {
    client: 'postgres',
    connection: {
      host,
      port,
      database,
      user,
      password,
      ssl: {
        rejectUnauthorized: false
      },
    },
  },
});
