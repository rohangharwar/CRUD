const mongoose = require('mongoose');

// Define the connection string
const dbURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/cruddb'; // Use env or fallback

// Connect to MongoDB
mongoose
  .connect(dbURI)
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Database connection failed:', error.message);
  });

module.exports = mongoose;