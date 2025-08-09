// app.js
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');  // HTTP request logger
const db = require('./db');

const userRoutes = require('./routes/userRoutes');

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
app.use('/app/users', userRoutes); // user routes
app.use(express.static('public'));// serve static files from public directory
// =================================
db.getConnection().then((err) => {
  
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
})
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