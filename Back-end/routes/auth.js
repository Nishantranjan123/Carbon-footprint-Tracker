
// module.exports = authenticate; // Export the middleware function
const express = require('express');
const { registerUser , loginUser  } = require('../controllers/authController');
const router = express.Router();

// Registration route (should not require authentication)
router.post('/register', registerUser );

// Login route (should not require authentication)
router.post('/login', loginUser );

module.exports = router;