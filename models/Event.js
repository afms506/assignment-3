const mongoose = require("mongoose");

//
// EVENT MODEL
// Defines the structure of an Event document in MongoDB.
// Each event represents a single hosted activity with details
// such as name, date, location, and capacity.
//

// Create the schema that describes required event fields
const eventSchema = new mongoose.Schema({

    // Name of the event (required)
    name: {
        type: String,
        required: true,   // Must be provided
        trim: true        // Removes extra spaces before/after
    },

    // Optional text description of the event
    description: {
        type: String,
        default: ""       // If empty, store empty string
    },

    // Location (city, building, room etc.)
    location: {
        type: String,
        default: ""       // Optional field
    },

    // Date of the event (required)
    date: {
        type: Date,
        required: true
    },

    // Maximum number of guests allowed
    capacity: {
        type: Number,
        required: true,   // Event must have a capacity
        min: 1            // Capacity cannot be zero or negative
    }
});

// Export the model so it can be used in controllers
module.exports = mongoose.model("Event", eventSchema);
