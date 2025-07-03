require('dotenv').config();
const { Pool } = require('pg');

/**
 * Singleton DB connection pool for PostgreSQL.
 * Configuration uses environment variables:
 *   DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD
 */
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 10,
  idleTimeoutMillis: 30000,
});

// PUBLIC_INTERFACE
function query(text, params) {
  /**
   * Executes a parameterized SQL query.
   * @param {string} text - SQL query with placeholders
   * @param {Array} params - Parameters for the query
   * @returns {Promise<*>}
   */
  return pool.query(text, params);
}

module.exports = { query };
