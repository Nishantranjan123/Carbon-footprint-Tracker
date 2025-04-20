const express = require('express');
const router = express.Router();
const { registerUser , loginUser  } = require('../controllers/authController');
const { addActivity } = require('../controllers/activityController'); // Import your new controller

// Existing routes
router.post('/register', registerUser );
router.post('/login', loginUser );

// New route for adding activity
router.post('/add-activity', addActivity); // Add this line

module.exports = router;