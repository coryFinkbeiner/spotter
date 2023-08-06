const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Route to create a new user
router.post('/users', usersController.createUser);

// Route to get a user by ID
router.get('/users/:id', usersController.getUserById);

// Add more routes for user operations if needed

module.exports = router;
