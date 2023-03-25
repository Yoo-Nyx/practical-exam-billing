const { Pool } = require("pg");
const DATABASE = require("./config");

const pool = new Pool({
  host: DATABASE.host,
  user: DATABASE.user,
  database: DATABASE.database,
  password: DATABASE.password,
  port: DATABASE.port,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;
