const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Define routes
router.post('/', userController.createUser);       // Create a user
router.get('/', userController.getAllUsers);      // Get all users
router.get('/:id', userController.getUserById);   // Get a user by ID
router.put('/:id', userController.updateUser);    // Update a user
router.delete('/:id', userController.deleteUser); // Delete a user

module.exports = router;