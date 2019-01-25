const express = require('express');

const router = express.Router();
const users = require('../controller/user.controller.js');
const uploading = require('../controller/upload/upload');

// Retrieve all user
router.get('/users', users.findAll);
// Retrieve a single user by Id
router.get('/users/:userId', users.findById);
// Update a user with Id
router.put('/users/:userId', users.update);
// Delete a user with Id
router.delete('/users/:userId', users.delete);
// Create a new user
router.post('/users', users.create);
// login test
router.post('/users/login', users.login);
// Signup a user
router.post('/users/signup', users.create);

// upload a file
router.post('/upload', uploading.single('avatar'), users.upload);

module.exports = router;
