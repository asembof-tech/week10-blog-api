require('dotenv').config({ quiet: true });

// Every variable the app cannot run without.
const required = ['PORT', 'MONGODB_URI', 'JWT_SECRET'];

const missing = required.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.error(`Missing required environment variables: ${missing.join(', ')}`);
  console.error('Copy .env.example to .env and fill in the values (on Render, set them in the Environment tab).');
  process.exit(1);
}

// The rest of the app imports this object instead of touching process.env directly.
module.exports = {
  port: process.env.PORT,
  mongoUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '30d',
  nodeEnv: process.env.NODE_ENV || 'development',
};
