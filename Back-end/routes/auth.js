// const jwt = require('jsonwebtoken');

// const authenticate = (req, res, next) => {
//     const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header

//     if (!token) {
//         return res.status(401).json({ msg: 'No token provided, authorization denied.' });
//     }

//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => { // Use the environment variable
//         if (err) {
//             return res.status(403).json({ msg: 'Token is not valid.' });
//         }
//         req.user = decoded; // Attach user info to request
//         next(); // Proceed to the next middleware or route handler
//     });
// };

// module.exports = authenticate; // Export the middleware function
const express = require('express');
const { registerUser , loginUser  } = require('../controllers/authController');
const router = express.Router();

// Registration route (should not require authentication)
router.post('/register', registerUser );

// Login route (should not require authentication)
router.post('/login', loginUser );

module.exports = router;