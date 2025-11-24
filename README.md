# **Multi-Event Guest Management System**

## **Live Demo**

**Live Site:** [https://assignment-3-2-l3j6.onrender.com](https://assignment-3-2-l3j6.onrender.com)
**GitHub Repository:** [https://github.com/afms506/assignment-3](https://github.com/afms506/assignment-3)

---

# **Project Overview**

The Multi-Event Guest Management System is a full-stack web application that allows users to create and manage multiple events, each with its own guest list. Users can add, view, edit, and delete events and guests through a responsive Bootstrap-styled interface built with EJS templates and Express.js.

This project was developed for **INFR3120 – Assignment 3** and meets all requirements including CRUD operations, MongoDB integration, EJS templating, Bootstrap UI, and deployment on a cloud hosting provider.

---

# **Purpose of the Project**

Managing events manually can become difficult when dealing with multiple guest lists. This system centralizes and organizes event and guest data, enabling users to:

* Track RSVP status
* Manage event capacity
* Update guest information
* Maintain multiple events at once
* Access a centralized dashboard

---

# **Target Users**

This application is designed for:

* Students organizing school or club events
* Individuals planning parties or gatherings
* Small organizations hosting meetings or workshops
* Event planners managing multiple clients

---

# **Features**

## **Event Features**

* Create new events (name, date, location, description, capacity)
* View all events in a dashboard layout
* Edit existing events
* Delete events with confirmation

## **Guest Features**

* Each event has its own guest list
* Add, edit, and delete guests
* Stores name, email, phone, and RSVP
* Event-scoped guest management

## **System & UI Features**

* Responsive Bootstrap 5 interface
* Custom CSS styling
* EJS partial templates (header/footer)
* JavaScript delete confirmation
* Table sorting
* Search filter
* Pagination script

---

# **Technology Stack**

* **Backend:** Node.js, Express.js
* **Frontend:** EJS, Bootstrap 5
* **Database:** MongoDB Atlas with Mongoose
* **Styling:** Bootstrap 5 + Custom CSS
* **Environment Variables:** dotenv
* **Version Control:** Git & GitHub
* **Deployment:** Render

---

# **Project Structure**

```
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
    events/
        add.ejs
        edit.ejs
    guests/
        add.ejs
        edit.ejs
        list.ejs
    partials/
        header.ejs
        footer.ejs
    index.ejs

.env
app.js
package.json
```

---

# **Installation and Setup**

## **1. Clone the repository**

```
git clone https://github.com/afms506/assignment-3.git
cd assignment-3
```

## **2. Install dependencies**

```
npm install
```

## **3. Create a .env file**

```
MONGO_URL=your-mongodb-connection-string
PORT=3000
```

## **4. Start the application**

```
npm start
```

---

# **Data Models**

## **Event Schema**

Fields:

* name
* date
* location
* description
* capacity

## **Guest Schema**

Fields:

* eventId (references Event model)
* name
* email
* phone
* rsvp

---

# **Routing Overview**

## **Event Routes**

```
GET    /events              → List all events
GET    /events/add          → Show "Add Event" form
POST   /events/add          → Create new event
GET    /events/edit/:id     → Show "Edit Event" form
POST   /events/edit/:id     → Update event
GET    /events/delete/:id   → Delete event
```

## **Guest Routes**

```
GET    /events/:eventId/guests              → List guests for event
GET    /events/:eventId/guests/add          → Add guest form
POST   /events/:eventId/guests/add          → Create guest
GET    /events/:eventId/guests/edit/:guestId → Edit guest form
POST   /events/:eventId/guests/edit/:guestId → Update guest
GET    /events/:eventId/guests/delete/:guestId → Delete guest
```

---

# **UI Design**

The system uses Bootstrap 5 for layout and styling, with custom CSS for additional design requirements. All pages include a shared header and footer via EJS partials. A light/dark mode toggle is included for improved accessibility.

---

# **Security**

* Sensitive credentials stored in `.env`
* `.env` excluded from GitHub using `.gitignore`
* MongoDB credentials never exposed publicly
* Delete confirmation to prevent accidental removal

---

# **Deployment**

The project is deployed on **Render**, using:

* GitHub repository auto-deploy
* Environment variables configured in dashboard
* Live MongoDB Atlas cluster

---

# **Assignment Requirements Checklist**

| Requirement         | Status   |
| ------------------- | -------- |
| Project Plan        | Complete |
| Express App         | Complete |
| Bootstrap Interface | Complete |
| MongoDB + Mongoose  | Complete |
| Home Page           | Complete |
| Header & Footer     | Complete |
| CRUD (Events)       | Complete |
| CRUD (Guests)       | Complete |
| Delete Confirmation | Complete |
| Code Comments       | Complete |
| .env + .gitignore   | Complete |
| GitHub Repo         | Complete |
| Cloud Deployment    | Complete |

---

# **Conclusion**

This project demonstrates full-stack development skills using Node.js, Express.js, MongoDB, and EJS templating. It incorporates CRUD functionality, UI design principles, secure configuration management, and cloud deployment.

============================================================
