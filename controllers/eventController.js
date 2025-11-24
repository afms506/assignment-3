const Event = require("../models/Event");

// Show all events
exports.listEvents = async (req, res) => {
    const events = await Event.find().sort({ date: 1 });
    res.render("index", { events });
};

// Add event form
exports.showAddForm = (req, res) => {
    res.render("events/add");
};

// Add event to DB
exports.addEvent = async (req, res) => {
    const { name, date, location, description, capacity } = req.body;

    await Event.create({
        name,
        date,
        location,
        description,
        capacity,
        capacityUsed: 0
    });

    res.redirect("/");
};

// Edit event form
exports.showEditForm = async (req, res) => {
    const event = await Event.findById(req.params.eventId);
    res.render("events/edit", { event });
};

// Update event
exports.editEvent = async (req, res) => {
    const { name, date, location, description, capacity } = req.body;

    await Event.findByIdAndUpdate(req.params.eventId, {
        name,
        date,
        location,
        description,
        capacity
    });

    res.redirect("/");
};

// Delete event
exports.deleteEvent = async (req, res) => {
    await Event.findByIdAndDelete(req.params.eventId);
    res.redirect("/");
};
