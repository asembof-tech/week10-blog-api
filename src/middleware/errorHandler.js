const env = require('../config/env');

const notFound = (req, res) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
};

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: 'Something went wrong',
    ...(env.nodeEnv !== 'production' && { details: err.message }),
  });
};

module.exports = { notFound, errorHandler };
