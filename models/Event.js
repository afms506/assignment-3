const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        default: ""
    },
    location: {
        type: String,
        default: ""
    },
    date: {
        type: Date,
        required: true
    },
    capacity: {
        type: Number,
        required: true,
        min: 1
    }
});

module.exports = mongoose.model("Event", eventSchema);
