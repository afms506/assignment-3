const express = require("express");

// mergeParams: true allows this router to access :eventId
// from the parent route (/events/:eventId/guests)
const router = express.Router({ mergeParams: true });

const guestController = require("../controllers/guestController");

//
// GUEST ROUTES
// These routes are nested under a specific Event.
// Example:
//    /events/12345/guests
//
// mergeParams:true allows us to read req.params.eventId
//

// --------------------------------------------------------
// LIST ALL GUESTS FOR AN EVENT
// GET /events/:eventId/guests
// --------------------------------------------------------
router.get("/", guestController.listGuests);

// --------------------------------------------------------
// SHOW "ADD GUEST" FORM
// GET /events/:eventId/guests/add
// --------------------------------------------------------
router.get("/add", guestController.showAddForm);

// --------------------------------------------------------
// PROCESS "ADD GUEST" FORM
// POST /events/:eventId/guests/add
// --------------------------------------------------------
router.post("/add", guestController.addGuest);

// --------------------------------------------------------
// SHOW "EDIT GUEST" FORM
// GET /events/:eventId/guests/edit/:guestId
// --------------------------------------------------------
router.get("/edit/:guestId", guestController.showEditForm);

// --------------------------------------------------------
// PROCESS "EDIT GUEST" FORM
// POST /events/:eventId/guests/edit/:guestId
// --------------------------------------------------------
router.post("/edit/:guestId", guestController.editGuest);

// --------------------------------------------------------
// DELETE GUEST
// GET /events/:eventId/guests/delete/:guestId
// --------------------------------------------------------
router.get("/delete/:guestId", guestController.deleteGuest);

// Export router to be used in app.js
module.exports = router;
