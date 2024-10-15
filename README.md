# Real-Time Messaging App

## Project Overview

This project is a **real-time messaging app** built using the MERN stack. The application allows users to send messages in real-time with online status and message notifications. It includes secure user authentication and a smooth user experience through modern UI design.

## Features

- **Real-time Communication**: Implemented real-time messaging using **Socket.io** for seamless message exchange.
- **Online Status & Notifications**: Users can see online statuses and receive notifications for new messages.
- **Authentication**: Integrated **JWT** for persistent login sessions, ensuring secure access without the need for repeated credential entry.
- **Password Encryption**: Used **bcrypt** to securely store and encrypt passwords during sign-up and login.
- **Global State Management**: Managed application state using **Zustand** for consistent and scalable state across the app.
- **Responsive UI**: Built a responsive user interface with **React**, **Tailwind CSS**, and **daisyUI** for a smooth and modern user experience.
- **Backend API**: Created a **RESTful API** using **Express** and **MongoDB** for efficient data handling and storage.

## Tech Stack

- **Frontend**: React, Tailwind CSS, daisyUI, Zustand
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication & Security**: JWT, bcrypt
- **Real-time Communication**: Socket.io

## Installation

Follow the steps below to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/messaging-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd messaging-app
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   npm run server
   ```
5. Start the frontend:
   ```bash
   npm start
   ```
6. Open your browser and go to **http://localhost:3000** to view the messaging app.

## Usage

- Sign up or log in to start sending real-time messages.
- Monitor online status and receive message notifications as new messages arrive.

## Future Enhancements

- Add group messaging functionality.
- Implement message read receipts.
- Improve scalability with additional security measures and advanced user management.
  # Live
  - https://loop-chat-azaan.onrender.com/
