// models/Activity.js
const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  activityData: { type: Object, required: true }, // Store the calculated data
  date: { type: Date, default: Date.now }, // Automatically set the date
});

module.exports = mongoose.model('Activity', ActivitySchema);