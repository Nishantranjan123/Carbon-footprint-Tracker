const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const MONGODB_URL = process.env.MONGODB_URL; // Use MONGODB_URL

const connectionToMongodb = () => {
    console.log("MongoDB URL:", MONGODB_URL); // Log the URL to check if it's defined
    if (!MONGODB_URL) {
        console.error("MongoDB URL is not defined. Please set the MONGODB_URL environment variable.");
        process.exit(1); // Exit the process if the URI is not set
    }

    // Remove deprecated options
    mongoose.connect(MONGODB_URL)
        .then(() => console.log("MongoDB connection successful"))
        .catch(err => console.log("MongoDB connection unsuccessful", err));
};

module.exports = connectionToMongodb; // Export the function directly