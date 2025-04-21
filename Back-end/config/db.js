const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const MONGODB_URL = process.env.MONGODB_URL; // Use MONGODB_URL

const connectionToMongodb = () => {
    console.log("MongoDB URL:", MONGODB_URL); // Log the URL to check if it's defined
    mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("MongoDB connection successful"))
        .catch(err => console.log("MongoDB connection unsuccessful", err));
};

module.exports = connectionToMongodb; // Export the function directly