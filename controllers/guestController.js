const Event = require("../models/Event");
const Guest = require("../models/Guest");

// LIST GUESTS FOR EVENT
exports.listGuests = async (req, res) => {
    const eventId = req.params.eventId;

    const event = await Event.findById(eventId);
    const guests = await Guest.find({ eventId });

    res.render("guests/list", { event, guests });
};

// SHOW ADD FORM
exports.showAddForm = async (req, res) => {
    const eventId = req.params.eventId;
    const event = await Event.findById(eventId);

    res.render("guests/add", { event });
};

// ADD GUEST
exports.addGuest = async (req, res) => {
    const eventId = req.params.eventId;

    await Guest.create({
        eventId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        rsvp: req.body.rsvp
    });

    res.redirect(`/events/${eventId}/guests`);
};

// SHOW EDIT FORM
exports.showEditForm = async (req, res) => {
    const eventId = req.params.eventId;
    const guestId = req.params.guestId;

    const event = await Event.findById(eventId);
    const guest = await Guest.findById(guestId);

    res.render("guests/edit", { event, guest });
};

// EDIT GUEST
exports.editGuest = async (req, res) => {
    const eventId = req.params.eventId;
    const guestId = req.params.guestId;

    await Guest.findByIdAndUpdate(guestId, req.body);

    res.redirect(`/events/${eventId}/guests`);
};

// DELETE GUEST
exports.deleteGuest = async (req, res) => {
    const eventId = req.params.eventId;
    const guestId = req.params.guestId;

    await Guest.findByIdAndDelete(guestId);

    res.redirect(`/events/${eventId}/guests`);
};
