const addActivity = async (req, res) => {
    const { travel, food, energy } = req.body;

    // Logic to calculate carbon footprint based on the input
    const footprint = calculateFootprint(travel, food, energy); // Implement this function

    res.json({ footprint });
};

const calculateFootprint = (travel, food, energy) => {
    // Example calculation logic
    return (travel * 0.2) + (food === 'non-veg' ? 1.5 : 0.5) + (energy * 0.3);
};

module.exports = { addActivity };