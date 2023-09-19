const express = require('express');
const router = express.Router();
const { User }  = require('../models');
const { favoritePuzzle } = require('../models');
const { Puzzle } = require('../models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const authCheck = require("../middleware/authCheck");
// const { imageSeeder } = require('../seeders/shared');
const fs = require('fs');
// const upload = require('../middleware/multer');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Route to create a new user
router.post('/create', async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      username,
      password: hashPassword,
    });

    res.status(201).json({ message: 'User created', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Could not create user' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (user === null) {
      res.status(401).json({ error: 'User not found' });
    } else {
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (isPasswordMatch) {
        const token = jwt.sign({ userId: user.id }, 'superSecretPrivateKey', { expiresIn: '3h' });
        res.cookie('token', token);
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ error: 'Passwords do not match' });
      }
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/profile/:userId', authCheck, async (req, res) => {
  const { userId } = req.params;
  const loggedInUserId = req.user.userId;

  if (userId !== loggedInUserId) {
    return res.status(403).json({ error: 'Access denied' });
  }

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const userProfile = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
    };

    res.status(200).json(userProfile);
  } catch (error) {
    console.error('Error fetching user profile by ID:', error);
    res.status(500).json({ error: 'Could not fetch user profile' });
  }
});

router.get('/edit/:id', authCheck, async (req, res) => {
  try {
    const id = req.params.id;
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

// Protected route to update a user's profile
router.post('/edit/:id', authCheck, async (req, res) => {
  try {
    const id = req.params.id;
    const { firstName, lastName, email } = req.body;
    
    // Ensure that only the logged-in user can update their profile
    if (req.user.userId !== id) {
      return res.status(403).json({ error: 'Access denied' });
    }

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

router.delete('/delete/:id', authCheck, async (req, res) => {
  try {
    const id = req.params.id;
    
    // Ensure that only the logged-in user can delete their profile
    if (req.user.userId !== id) {
      return res.status(403).json({ error: 'Access denied' });
    }

    const user = await User.findByPk(id);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    await User.destroy({ where: { id: id } });

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Could not delete user' });
  }
});

// router.post('/upload-image', upload.array('images'), async (req, res) => {
//   // Access the uploaded files using req.files
//   const imagePaths = req.files.map((file) => file.path);

//   // Save imagePaths to the database (update your Puzzle model accordingly)
  
//   // Respond to the client with success or error message
//   res.json({ message: 'Images uploaded successfully', imagePaths });
// });

module.exports = router;

