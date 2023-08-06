const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function setupDatabase() {
  try {
    // Run SQL queries to create tables, if they don't exist
    const createUsersTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `;

    await pool.query(createUsersTableQuery);
    console.log('Database setup complete!');
  } catch (error) {
    console.error('Error setting up database:', error);
  }
}

setupDatabase();


module.exports = pool;
