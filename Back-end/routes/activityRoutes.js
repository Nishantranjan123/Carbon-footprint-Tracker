const express = require('express');
const { addActivity, getRecentActivities } = require('../controllers/activityController');
const authenticate = require('../middleware/authMiddleware'); // Ensure this points to your auth middleware

const router = express.Router();

// Route to add a new activity
router.post('/activity', authenticate, addActivity);

// Route to get recent activities
router.get('/activity/recent', authenticate, getRecentActivities);

module.exports = router;