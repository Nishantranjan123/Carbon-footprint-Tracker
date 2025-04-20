const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth'); // Ensure this is the correct path
const path = require('path'); // Import path module
const activityRoutes = require('./routes/activityRoutes');

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../Front-end')));

// Define routes
app.use('/api/auth', authRoutes); // This sets the base URL for the auth routes
app.use('/api', activityRoutes); // This will prefix all routes in activityRoutes with /api

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front-end/index.html')); // Serve the main HTML file
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));