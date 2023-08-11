const userModel = require('../models/usersModel');

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await userModel.createUser(username, email, password);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error getting user' });
  }
};

module.exports = {
  createUser,
  getUserById,
};
