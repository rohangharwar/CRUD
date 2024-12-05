require('dotenv').config(); // Load environment variables
require('./config/database'); // Import and initialize database connection

const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Example route

app.use(express.json()); // Middleware to parse JSON

// Use routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});