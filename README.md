Vacation Rental

## Overview


The Vacation Rental project is a full-stack web application designed for users to browse, view, and receive personalized property recommendations for vacation rentals or sales. The application uses a MERN stack (MongoDB, Express, React, Node.js) with AI-driven recommendations powered by TensorFlow for better personalization. Users can log in to the platform, view property listings, and receive recommendations based on their browsing history and preferences.

## Features

## User Authentication Flow: 

Implemented login and logout functionality with a secure database connection using JWT and bcrypt for password hashing.
Property Listing Page: Users can view detailed listings of vacation properties available for sale or rent. Property data is fetched from a MongoDB Atlas database.
AI-Driven Property Recommendations: A recommendation algorithm uses browsing history and preferences to suggest personalized properties to the users, powered by TensorFlow and Google Colab.
Responsive Design: The frontend is fully responsive, ensuring a seamless experience on both desktop and mobile devices.

## Tech Stack

## Frontend:

React (Vite)
Tailwind CSS

## Backend:

Node.js
Express
MongoDB (Atlas)
JWT (for authentication)
bcrypt (for password hashing)

## AI and Recommendations:

Python (Google Colab)
TensorFlow (for building recommendation algorithms)
Kaggle datasets for property data

## Deployment:

MongoDB Atlas for database hosting
Frontend hosted using a cloud provider Netlify
Backend hosted on Render.


## Installation

Prerequisites
Node.js installed on your machine
MongoDB Atlas account and a cluster created
Python 3.x installed (for AI recommendation engine)


## Backend Setup

## Clone the repository:

```bash
git clone https://github.com/your-username/vacation-rental.git
cd vacation-rental
```


## Install server dependencies:

```bash
cd server
npm install
```

bash

## Create a .env file in the server directory and set up the environment variables:

```bash
DB_URI=<your-mongodb-atlas-uri>
JWT_SECRET=<your-jwt-secret-key>
```

## Run the server:

```bash
npm start
```
## Frontend Setup

## Install frontend dependencies:
```bash
cd client
npm install
```
## Create a .env file in the client directory and add the backend API URL:

```bash
VITE_API_URL=<your-backend-api-url>
```
## Run the frontend:

```bash

npm run dev
```

## AI Recommendation System Setup

Download the Kaggle dataset that is used for property recommendations.
Implement the recommendation algorithm in Google Colab using TensorFlow.
Ensure that the recommendation model is integrated with the backend API to send personalized property suggestions to users.

## Key Features and Components

1. User Authentication Flow
Login: A user can log in with their email and password. Passwords are securely hashed using bcrypt, and a JWT is returned upon successful authentication.
Logout: The user can log out, which invalidates the JWT and ends the session.
2. Property Listing Page
Property Listings: The frontend fetches property data from the backend and displays it in a list. Each property has details such as price, description, and availability.
Pagination: Implement pagination to handle large sets of property data.
3. AI-Driven Property Recommendations
TensorFlow Model: The AI-driven recommendation system uses TensorFlow to analyze user preferences and browsing patterns.
Google Colab: The model is developed and trained using Google Colab and Kaggle data to ensure accurate property suggestions.
4. Responsive Design
Tailwind CSS is used for styling, ensuring that the application is fully responsive across desktop and mobile devices.
The layout adjusts dynamically based on screen size, providing an optimized user experience.

## Screenshots

## Property Listing Page

## AI Recommendations

## User Login Page

## Mobile View
