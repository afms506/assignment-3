const express = require("express");
const router = express.Router({ mergeParams: true });
const guestController = require("../controllers/guestController");

router.get("/", guestController.listGuests);
router.get("/add", guestController.showAddForm);
router.post("/add", guestController.addGuest);
router.get("/edit/:guestId", guestController.showEditForm);
router.post("/edit/:guestId", guestController.editGuest);
router.get("/delete/:guestId", guestController.deleteGuest);

module.exports = router;
