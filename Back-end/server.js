const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth'); // Importing the auth routes
const path = require('path'); // Import path module

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../Front-end')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Front-end/index.html')); // Serve the main HTML file
});

// Using the auth routes
app.use('/api/auth', authRoutes);  // This sets the base URL for the auth routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));