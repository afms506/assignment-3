const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

//
// EVENT ROUTES
// All routes here handle CRUD operations for Events.
// Each route calls a specific controller function that
// performs the actual database work.
//

// --------------------------------------------------------
// LIST ALL EVENTS
// GET /events
// Shows the dashboard of all events
// --------------------------------------------------------
router.get("/", eventController.listEvents);

// --------------------------------------------------------
// SHOW "ADD EVENT" FORM
// GET /events/add
// --------------------------------------------------------
router.get("/add", eventController.showAddForm);

// --------------------------------------------------------
// PROCESS "ADD EVENT" FORM
// POST /events/add
// Creates a new event in MongoDB
// --------------------------------------------------------
router.post("/add", eventController.addEvent);

// --------------------------------------------------------
// SHOW "EDIT EVENT" FORM
// GET /events/edit/:eventId
// Loads event info so user can edit it
// --------------------------------------------------------
router.get("/edit/:eventId", eventController.showEditForm);

// --------------------------------------------------------
// PROCESS "EDIT EVENT" FORM
// POST /events/edit/:eventId
// Updates the event in MongoDB
// --------------------------------------------------------
router.post("/edit/:eventId", eventController.editEvent);

// --------------------------------------------------------
// DELETE EVENT
// GET /events/delete/:eventId
// Executes delete and redirects back to dashboard
// --------------------------------------------------------
router.get("/delete/:eventId", eventController.deleteEvent);

// Export router to be used in app.js
module.exports = router;
