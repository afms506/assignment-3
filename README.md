Live Demo
Live Site: Add your deployed Render/Heroku/Azure link here
GitHub Repository: https://github.com/afms506/assignment-3

Project Overview
The Multi-Event Guest Management System is a web-based platform that allows users to create and manage multiple events, each with its own guest list. Users can add, view, update, and delete both events and guests within a clean, responsive, Bootstrap-styled interface. This application was built as part of INFR3120 – Assignment 3 and fully satisfies the CRUD, design, routing, and database integration requirements outlined in the assignment guidelines.

Purpose of the Project
Managing guests across several events becomes difficult using spreadsheets or paper lists. This system centralizes all event and guest data, enabling users to:
- Track RSVP status
- Monitor event capacity
- Edit guest details
- Maintain multiple events at once
- View organized data in a modern online interface

Target Users
This system is intended for:
- Students organizing school or club events
- Individuals planning gatherings or parties
- Small organizations hosting sessions or workshops
- Event planners handling multiple clients

Features

Event Features
- Create new events (name, date, location, capacity, description, RSVP requirement)
- View events in a responsive dashboard
- Edit or delete events with confirmation
- Capacity indicators for each event

Guest Features
- Each event has its own guest list
- Add, edit, or delete guests
- Store name, email, phone number, RSVP status

System and UI Features
- Responsive Bootstrap 5 design
- Custom CSS and dark/light mode toggle
- Shared EJS partials (header and footer)
- Delete confirmation box
- Table sorting, search, and pagination scripts

Technology Stack
Backend: Node.js, Express.js
Database: MongoDB Atlas with Mongoose
Frontend: EJS, Bootstrap 5, Custom CSS
Version Control: Git & GitHub
Deployment: Render / Azure / Heroku
Environment Config: dotenv

Project Structure
controllers/
   eventController.js
   guestController.js
models/
   Event.js
   Guest.js
public/
   css/style.css
   js/deleteConfirm.js
   js/pagination.js
   js/search.js
   js/tableSort.js
routes/
   eventRoutes.js
   guestRoutes.js
views/
   events/add.ejs
   events/edit.ejs
   guests/add.ejs
   guests/edit.ejs
   guests/list.ejs
   partials/header.ejs
   partials/footer.ejs
   index.ejs
.env
app.js
package.json

Installation and Setup

1. Clone the repository
git clone <your-repo-url>
cd project-folder

2. Install dependencies
npm install

3. Create a .env file
MONGO_URL=your-mongodb-connection-string
PORT=3000

4. Run the server
npm start

Data Models

Event Schema
- name
- date
- location
- description
- rsvpRequired
- capacity

Guest Schema
- eventId (references Event)
- name
- email
- phone
- rsvp

Routing Overview

Event Routes
GET /events – List all events
GET /events/add – Add event form
POST /events/add – Create event
GET /events/edit/:id – Edit event form
POST /events/edit/:id – Update event
GET /events/delete/:id – Confirm delete
POST /events/delete/:id – Delete event

Guest Routes
Same CRUD structure, tied to an event's guest list.

UI Design
The application uses Bootstrap 5 with a custom design, distinct from the class example. The layout includes a dashboard for events, table views for guests, and custom styling. Dark/light mode is supported.

Security
- .gitignore hides sensitive files
- .env stores credentials
- Delete confirmation prevents accidental deletions

Deployment
Hosted on a cloud provider (Render / Azure / Heroku) with a live MongoDB database and environment configuration.

Assignment Requirements Checklist
Project Plan – Complete
Express Application – Complete
Bootstrap Interface – Complete
MongoDB with Mongoose – Complete
Home Page – Complete
Header and Footer – Complete
CRUD Functionality – Complete
Delete Confirmation – Complete
Code Commenting – Complete
.env and .gitignore – Complete
GitHub Repository – Complete
Cloud Deployment – Complete
