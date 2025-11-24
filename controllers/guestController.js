const Event = require("../models/Event");
const Guest = require("../models/Guest");

//
// CONTROLLER: GUEST MANAGEMENT
// Handles CRUD operations for guests belonging to a specific event.
// All guest routes are nested under an event (eventId required).
//

// --------------------------------------------------------
// LIST ALL GUESTS FOR A SPECIFIC EVENT
// --------------------------------------------------------
exports.listGuests = async (req, res) => {
    const eventId = req.params.eventId;

    // Get the event (for page title/header)
    const event = await Event.findById(eventId);

    // Fetch all guests linked to this event
    const guests = await Guest.find({ eventId });

    // Render guest list table
    res.render("guests/list", { event, guests });
};

// --------------------------------------------------------
// SHOW "ADD GUEST" FORM
// --------------------------------------------------------
exports.showAddForm = async (req, res) => {
    const eventId = req.params.eventId;

    // Fetch event to show event name on the page
    const event = await Event.findById(eventId);

    // Render add guest form
    res.render("guests/add", { event });
};

// --------------------------------------------------------
// ADD NEW GUEST TO EVENT
// --------------------------------------------------------
exports.addGuest = async (req, res) => {
    const eventId = req.params.eventId;

    // Create guest record from form data
    await Guest.create({
        eventId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        rsvp: req.body.rsvp
    });

    // After creating the guest, return to guest list
    res.redirect(`/events/${eventId}/guests`);
};

// --------------------------------------------------------
// SHOW "EDIT GUEST" FORM
// --------------------------------------------------------
exports.showEditForm = async (req, res) => {
    const eventId = req.params.eventId;
    const guestId = req.params.guestId;

    // Retrieve event and guest for form display
    const event = await Event.findById(eventId);
    const guest = await Guest.findById(guestId);

    // Render edit form with existing guest data
    res.render("guests/edit", { event, guest });
};

// --------------------------------------------------------
// UPDATE GUEST INFORMATION
// --------------------------------------------------------
exports.editGuest = async (req, res) => {
    const eventId = req.params.eventId;
    const guestId = req.params.guestId;

    // Update guest record with submitted form data
    await Guest.findByIdAndUpdate(guestId, req.body);

    // Redirect back to guest list
    res.redirect(`/events/${eventId}/guests`);
};

// --------------------------------------------------------
// DELETE A GUEST FROM AN EVENT
// --------------------------------------------------------
exports.deleteGuest = async (req, res) => {
    const eventId = req.params.eventId;
    const guestId = req.params.guestId;

    // Remove guest from database
    await Guest.findByIdAndDelete(guestId);

    // Redirect back to list for the same event
    res.redirect(`/events/${eventId}/guests`);
};
