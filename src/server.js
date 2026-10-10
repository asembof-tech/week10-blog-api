const env = require('./config/env'); // validates env vars first; exits if any are missing
const connectDB = require('./config/db');
const app = require('./app');

connectDB().then(() => {
  app.listen(env.port, () => {
    console.log(`Server running on port ${env.port}`);
  });
});
