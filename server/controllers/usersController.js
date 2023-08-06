const userModel = require('../models/usersModel');

const createUser = async (req, res) => {
  try {
    // Extract username, email, and password from the request body
    const { username, email, password } = req.body;

    // Call the createUser function from the userModel to insert the user in the database
    const newUser = await userModel.createUser(username, email, password);

    // Respond with the newly created user
    res.json(newUser);
  } catch (error) {
    // Handle errors and respond with an error status code
    res.status(500).json({ error: 'Error creating user' });
  }
};

const getUserById = async (req, res) => {
  try {
    // Extract the user ID from the request parameters
    const { id } = req.params;

    // Call the getUserById function from the userModel to fetch the user from the database
    const user = await userModel.getUserById(id);

    // If the user is found, respond with the user data
    if (user) {
      res.json(user);
    } else {
      // If the user is not found, respond with a not found status code
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    // Handle errors and respond with an error status code
    res.status(500).json({ error: 'Error getting user' });
  }
};

module.exports = {
  createUser,
  getUserById,
  // Export other functions here if needed
};
