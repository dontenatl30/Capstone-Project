const express = require('express');
const router = express.Router();
const { User }  = require('../models');
const { favoritePuzzle } = require('../models');
const { Puzzle } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const authCheck = require("../middleware/authCheck");
// User login


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Route to create a new user
router.post('/create', async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;

  try {
    // Hash the user's password
    const hashPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user in the database using Sequelize
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      username,
      password: hashPassword,
    });

    // Respond with success message and/or user data
    res.status(201).json({ message: 'User created', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Could not create user' });
  }
});


router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find a single user in the database using the provided username
    const user = await User.findOne({ where: { username } });

    if (user === null) {
      // If the user is not found, respond with an error
      res.status(401).json({ error: 'User not found' });
    } else {
      // Compare the plaintext password from the form to the hashed password from the database
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      console.log(isPasswordMatch)
      if (isPasswordMatch) {
        // If passwords match, generate a JWT token for authentication
        const token = jwt.sign({ userId: user.id }, 'superSecretPrivateKey', { expiresIn: '3h' });
        console.log(isPasswordMatch)
        // Set the token as a cookie (or you can store it securely based on your app's needs)
        res.cookie('token', token);
        console.log(token);
        // Respond with success or redirect as needed
        res.status(200).json({ message: 'Login successful' });
      } else {
        // If passwords do not match, respond with an error
        res.status(401).json({ error: 'Passwords do not match' });
      }
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/profile/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the user by their ID
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // Extract user profile information
    const userProfile = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      // Add other profile information here if needed
    };

    res.status(200).json(userProfile);
  } catch (error) {
    console.error('Error fetching user profile by ID:', error);
    res.status(500).json({ error: 'Could not fetch user profile' });
  }
});

router.get('/edit/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // Find the user by their ID
    const user = await User.findByPk(id);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.render('edit', {
      title: 'Edit User',
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (error) {
    console.error('Error fetching user for edit:', error);
    res.status(500).json({ error: 'Could not fetch user for edit' });
  }
});

router.post('/edit/:id', async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, email } = req.body;

  try {
    // Update the user's information in the database using Sequelize
    await User.update(
      { firstName, lastName, email },
      { where: { id: id } }
    );

    res.json({ message: 'User updated successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Could not update user' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  // const { firstName, lastName, email } = req.body;

  try {
    // Find the user by their ID
    const user = await User.findByPk(id);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // Delete the user from the database using Sequelize
    await User.destroy({ where: { id: id } });

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Could not delete user' });
  }
});

// Define a route to fetch images from Pixabay
router.get('/api/pixabay', async (req, res) => {
  try {
    const query = req.query.query;
    const apiKey = req.headers.authorization.replace('Bearer ', ''); // Get the API key from the header

    const pixabayResponse = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}`);
    const data = await pixabayResponse.json();

    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Pixabay:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;
