const Activity = require('../models/Activity');

const addActivity = async (req, res) => {
    const { travel, food, energy } = req.body;
    const userId = req.user.id; // Assuming you have user authentication set up

    // Logic to calculate carbon footprint based on the input
    const footprint = calculateFootprint(travel, food, energy);

    // Create a new activity entry
    const newActivity = new Activity({
        userId,
        activityData: { travel, food, energy, footprint },
        date: new Date(), // explicitly set current timestamp
      });      

    try {
        await newActivity.save(); // Save the activity to the database
        res.status(201).json({ msg: 'Activity saved successfully', footprint });
    } catch (error) {
        res.status(500).json({ msg: 'Error saving activity', error });
    }
};

const calculateFootprint = (travel, food, energy) => {
    // Example calculation logic
    return (travel * 0.2) + (food === 'non-veg' ? 1.5 : 0.5) + (energy * 0.3);
};

const getRecentActivities = async (req, res) => {
    const userId = req.user.id; // Assuming you have user authentication set up

    try {
        const activities = await Activity.find({ userId }).sort({ date: -1 }).limit(5); // Get the last 5 activities
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ msg: 'Error fetching activities', error });
    }
};

module.exports = { addActivity, getRecentActivities };