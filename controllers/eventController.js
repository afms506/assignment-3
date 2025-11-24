const Event = require("../models/Event");

//
// CONTROLLER: EVENT MANAGEMENT
// Each function below handles one part of the CRUD flow
// for the Event model. These controllers are called from
// the eventRoutes.js routing file.
//

// --------------------------------------------------------
// LIST ALL EVENTS (Home/Dashboard View)
// --------------------------------------------------------
exports.listEvents = async (req, res) => {
    // Retrieve all events from MongoDB, sorted by date (ascending)
    const events = await Event.find().sort({ date: 1 });

    // Render the homepage (index.ejs) and pass the events list
    res.render("index", { events });
};

// --------------------------------------------------------
// SHOW "ADD EVENT" FORM
// --------------------------------------------------------
exports.showAddForm = (req, res) => {
    // Renders the form for creating a new event
    res.render("events/add");
};

// --------------------------------------------------------
// CREATE NEW EVENT IN DATABASE
// --------------------------------------------------------
exports.addEvent = async (req, res) => {
    // Extract event data from the form submission
    const { name, date, location, description, capacity } = req.body;

    // Insert a new Event document into MongoDB
    await Event.create({
        name,
        date,
        location,
        description,
        capacity,
        capacityUsed: 0 // Tracks how many guests have been added
    });

    // After saving, redirect to homepage
    res.redirect("/");
};

// --------------------------------------------------------
// SHOW "EDIT EVENT" FORM
// --------------------------------------------------------
exports.showEditForm = async (req, res) => {
    // Retrieve the specific event using the eventId from the URL
    const event = await Event.findById(req.params.eventId);

    // Render the edit page with existing event data
    res.render("events/edit", { event });
};

// --------------------------------------------------------
// UPDATE EVENT DETAILS IN DATABASE
// --------------------------------------------------------
exports.editEvent = async (req, res) => {
    const { name, date, location, description, capacity } = req.body;

    // Update the event with the submitted data
    await Event.findByIdAndUpdate(req.params.eventId, {
        name,
        date,
        location,
        description,
        capacity
    });

    // Redirect to homepage after update
    res.redirect("/");
};

// --------------------------------------------------------
// DELETE EVENT FROM DATABASE
// --------------------------------------------------------
exports.deleteEvent = async (req, res) => {
    // Remove the event using its ID
    await Event.findByIdAndDelete(req.params.eventId);

    // Redirect back to homepage
    res.redirect("/");
};
