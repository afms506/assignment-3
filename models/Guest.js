const mongoose = require("mongoose");

//
// GUEST MODEL
// Defines what a Guest document looks like in MongoDB.
// Each guest belongs to a specific event (via eventId).
//

const guestSchema = new mongoose.Schema({

    // Link each guest to an Event using the Event's ID
    eventId: {
        type: mongoose.Schema.Types.ObjectId, // Stores the ObjectId of an Event
        ref: "Event",                         // Tells Mongoose this ID refers to the Event model
        required: true                        // Guest must belong to an event
    },

    // Guest full name
    name: {
        type: String,
        required: true,    // Name is mandatory
        trim: true         // Remove extra whitespace
    },

    // Optional email
    email: {
        type: String,
        default: ""        // If not provided, save empty string
    },

    // Optional phone number
    phone: {
        type: String,
        default: ""        // Blank by default
    },

    // RSVP field — limited to two values
    rsvp: {
        type: String,
        enum: ["Yes", "No"], // Allowed values only
        default: "No"        // If no response, assume “No”
    }
});

// Export model for controllers to use
module.exports = mongoose.model("Guest", guestSchema);
