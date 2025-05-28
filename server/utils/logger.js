// utils/logger.js
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize, errors, json } = format;
const path = require('path');
const DailyRotateFile = require('winston-daily-rotate-file');

// Custom format for console output
const consoleFormat = printf(({ level, message, timestamp, stack }) => {
  let log = `${timestamp} [${level}]: ${message}`;
  if (stack) {
    log += `\n${stack}`;
  }
  return log;
});

// Custom format for file output
const fileFormat = printf(({ level, message, timestamp, stack, ...metadata }) => {
  let log = {
    timestamp,
    level,
    message,
    ...metadata
  };
  if (stack) {
    log.stack = stack;
  }
  return JSON.stringify(log);
});

// Create logger instance
const logger = createLogger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    errors({ stack: true }), // Include stack traces for errors
    process.env.NODE_ENV === 'production' ? json() : combine(colorize(), consoleFormat)
  ),
  transports: [
    // Console transport
    new transports.Console({
      handleExceptions: true,
      handleRejections: true
    }),
    
    // Daily rotating file transport for errors
    new DailyRotateFile({
      filename: path.join(__dirname, '../logs/error-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      level: 'error',
      maxSize: '20m',
      maxFiles: '30d',
      format: combine(timestamp(), fileFormat)
    }),
    
    // Daily rotating file transport for all logs
    new DailyRotateFile({
      filename: path.join(__dirname, '../logs/combined-%DATE%.log'),
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '30d',
      format: combine(timestamp(), fileFormat)
    })
  ],
  exitOnError: false
});

// Add stream for Express morgan logging
logger.stream = {
  write: (message) => {
    logger.info(message.trim());
  }
};

// Handle uncaught exceptions
logger.exceptions.handle(
  new DailyRotateFile({
    filename: path.join(__dirname, '../logs/exceptions-%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    maxSize: '20m',
    maxFiles: '30d'
  })
);

module.exports = logger;