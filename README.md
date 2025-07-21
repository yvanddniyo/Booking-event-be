# TicketBookingApp 🎟️

A full-stack Ticket Booking App that allows users to register, log in, create and manage events, and book tickets. The application is built with clean code architecture, RESTful APIs, and follows modern development best practices.

## 🌟 Features

### 🔐 Authentication
- User Registration
- User Login with token-based authentication

### 👤 User Management
- Get all users
- Get, update, and delete a specific user by ID

### 📅 Event Management
- Create, read, update, and delete events
- Fetch all events or a specific event
- Get bookings associated with a specific event

### 🎫 Booking Management
- Create a booking
- Get all bookings for a specific user
- Update a booking

---

## 🚀 Getting Started Locally

### 🔧 Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB or PostgreSQL (depending on your setup)

### 📥 Installation

```bash
git clone https://github.com/yvanddniyo/Booking-event-be.git
cd booking-event-be
npm install

Env:
PORT = 10000
# Database configuration
DATABASE_URL = 'your_database'
JWT_SECRET = 'jwt_secret'

CLOUDINARY_CLOUDNAME = name
CLOUDINARY_API_KEY =api_key
CLOUDINARY_API_SECRET = api_secret

### Running the Application
npm run dev
npm run build
npm start

API Reference:
### AUTH
| Method | Endpoint                | Description         |
| ------ | ----------------------- | ------------------- |
| POST   | `/api/v1/auth/register` | Register a new user |
| POST   | `/api/v1/auth/login`    | Login existing user |

###USER

| Method | Endpoint            | Description    |
| ------ | ------------------- | -------------- |
| GET    | `/api/v1/users`     | Get all users  |
| GET    | `/api/v1/users/:id` | Get user by ID |
| PATCH  | `/api/v1/users/:id` | Update user    |
| DELETE | `/api/v1/users/:id` | Delete user    |

###EVENT

| Method | Endpoint                      | Description                       |
| ------ | ----------------------------- | --------------------------------- |
| GET    | `/api/v1/events`              | Get all events                    |
| POST   | `/api/v1/events`              | Create a new event                |
| GET    | `/api/v1/events/:id`          | Get event by ID                   |
| PATCH  | `/api/v1/events/:id`          | Update event                      |
| DELETE | `/api/v1/events/:id`          | Delete event                      |
| GET    | `/api/v1/events/:id/bookings` | Get bookings for a specific event |

### BOOKING
| Method | Endpoint                   | Description                 |
| ------ | -------------------------- | --------------------------- |
| POST   | `/api/v1/bookings`         | Create a booking            |
| GET    | `/api/v1/bookings/:userId` | Get all bookings for a user |
| PATCH  | `/api/v1/bookings/:id`     | Update a booking            |



