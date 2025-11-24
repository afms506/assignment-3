const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

// List all events (dashboard handled in app.js, but keep for structure)
router.get("/", eventController.listEvents);

// Add event
router.get("/add", eventController.showAddForm);
router.post("/add", eventController.addEvent);

// Edit event
router.get("/edit/:eventId", eventController.showEditForm);
router.post("/edit/:eventId", eventController.editEvent);

// Delete event
router.get("/delete/:eventId", eventController.deleteEvent);

module.exports = router;
