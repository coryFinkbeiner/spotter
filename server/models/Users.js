const pool = require('../server'); // Assuming your server file is named 'server.js'

const createUser = async (username, email, password) => {
  try {
    const query = `
      INSERT INTO users (username, email, password)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const values = [username, email, password];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const query = `
      SELECT * FROM users WHERE id = $1;
    `;

    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

// Other functions for interacting with the Users table

module.exports = {
  createUser,
  getUserById,
  // Export other functions here if needed
};
