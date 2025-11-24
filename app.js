// Import required modules
const express = require("express");           // Web server framework
const mongoose = require("mongoose");         // MongoDB ORM
const path = require("path");                 // Helps work with file paths
require("dotenv").config();                   // Loads environment variables from .env

// Import route files
const eventRoutes = require("./routes/eventRoutes");
const guestRoutes = require("./routes/guestRoutes");

const app = express();


// --------------------------------------------------
// MIDDLEWARE
// --------------------------------------------------

// Parse form data sent using POST
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images) from /public folder
app.use(express.static(path.join(__dirname, "public")));


// --------------------------------------------------
// VIEW ENGINE SETUP (EJS TEMPLATES)
// --------------------------------------------------

app.set("view engine", "ejs");                         // Set EJS as the template engine
app.set("views", path.join(__dirname, "views"));       // Set the views folder location


// --------------------------------------------------
// DATABASE CONNECTION
// --------------------------------------------------

// Connect to MongoDB using the connection string stored in MONGO_URL
// This works for BOTH local hosting and Render hosting
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB error:", err));


// --------------------------------------------------
// BASIC REDIRECTS
// --------------------------------------------------

// Redirect old /guests route to the events dashboard
app.get("/guests", (req, res) => {
    res.redirect("/events");
});

// Redirect root URL (/) to event list page
app.get("/", (req, res) => {
    res.redirect("/events");
});


// --------------------------------------------------
// ROUTES
// --------------------------------------------------

// Event CRUD routes (add/edit/delete events)
app.use("/events", eventRoutes);

// Guest CRUD routes nested under each event
// Example: /events/123/guests
app.use("/events/:eventId/guests", guestRoutes);


// --------------------------------------------------
// 404 PAGE HANDLER
// --------------------------------------------------
// This runs when no route above matches the request
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});


// --------------------------------------------------
// START SERVER
// --------------------------------------------------
// Uses Render's port in production OR localhost:3000 in development
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
