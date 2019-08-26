// config.js
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  unsplashSecretKey: process.env.UNSPLASH_APP_SECRET,
  unsplashAppAccessKey: process.env.UNSPLASH_APP_ACCESS_KEY,
  port: process.env.PORT
};
