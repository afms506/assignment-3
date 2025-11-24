const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const eventRoutes = require("./routes/eventRoutes");
const guestRoutes = require("./routes/guestRoutes");

const app = express();

// ---------------------
// MIDDLEWARE
// ---------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ---------------------
// DATABASE CONNECTION
// -----------------------
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB error:", err));

// ---------------------
// REDIRECTS
// ---------------------

// Visiting old /guests route? → redirect to events dashboard
app.get("/guests", (req, res) => {
    res.redirect("/events");
});

// Root → dashboard
app.get("/", (req, res) => {
    res.redirect("/events");
});

// ---------------------
// ROUTES
// ---------------------

// Event routes
app.use("/events", eventRoutes);

// Guest routes (nested under events)
app.use("/events/:eventId/guests", guestRoutes);

// ---------------------
// 404 HANDLER
// ---------------------
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// ---------------------
// START SERVER
// ---------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
