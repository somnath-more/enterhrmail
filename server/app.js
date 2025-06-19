// app.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');  // HTTP request logger

// Initialize Express app
const app = express();

// =================================
// Middleware Setup
// =================================
app.use(helmet()); // Security headers
app.use(cors()); // Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Logging in development
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

// =================================
// Database Connection
// =================================

// =================================
// API Routes
// =================================


// =================================
// Health Check Route
// =================================
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});


module.exports = app;