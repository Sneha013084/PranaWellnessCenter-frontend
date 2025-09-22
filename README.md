## Overview

This is the frontend application for the Wellness center booking website, built using React, javascript and Vanilla css. It provides the user interface for interacting with the backend API, including user registration, login, profile management, and booking services.

## Features

User authentication (registration, login, logout)

Profile viewing and editing

Booking creation, viewing, and status updates

Responsive design for desktop and mobile

Error handling and form validati

## Technologies Used

Frontend Framework: React.js

State Management: Context API 

Styling:CSS 

Routing: React Router DOM

API Calls: Axios / Fetch API

Other Tools: Prettier

## Installation

Clone the repository:

git clone https://github.com/Sneha013084/PranaWellnessCenter-frontend


## Navigate to the frontend folder:

cd frontend


## Install dependencies:

npm install


## Create a .env file in the root 

REACT_APP_API_URL=http://localhost:5000/api


## Start the development server:

npm start


The app should now be running at http://localhost:5173

## Folder Structure

frontend/
├─ public/                 # Static files
├─ src/
│  ├─ components/          # React components (UI elements)
│  ├─ pages/               # Pages (Login, Register, Profile, Booking)
│  ├─ context/             # Context API providers
│  ├─ services/            # API service calls
│  ├─ App.js / App.tsx     # Main App component
│  └─ index.js / index.tsx # Entry point
├─ package.json
└─ README.md

## Connecting to Backend

Ensure that backend server is running at the URL specified in .env file. API calls from the frontend will interact with endpoints such as:

POST /api/users/register – Register new users

POST /api/users/login – Login users

GET /api/users/profile – Get user profile

POST /api/bookings – Create a new booking

GET /api/bookings – Get user bookings

## Deployment

To build the frontend for production:

## npm run build


The build folder can then be served by any backend Express server or deployed on platforms like Render, Vercel, or Netlify.
