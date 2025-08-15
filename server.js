// Import Express framework to create the server
import express from 'express'

// Import Mongoose to connect and interact with MongoDB
import mongoose from 'mongoose';

// Import dotenv for environment variables
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import controller functions for URL shortening and redirection
import { shortUrl, getOriginalUrl } from "./Controllers/url.js";

const app = express(); // Create an Express app instance

// Middleware to parse form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB database using Mongoose with environment variables
mongoose.connect(process.env.MONGODB_URI,
  { dbName: process.env.DB_NAME }) // Select database name from environment
  .then(() => console.log("Connected to MongoDB")) // Success message
  .catch((err) => console.log(err)); // Error message if connection fails

// Route to render the main index.ejs file with an empty shortUrl on first load
app.get('/', (req, res) => {
  res.render("index.ejs", { shortUrl: null });
});

// Route to handle form submission for creating a short URL
// Calls the 'shortUrl' controller when user submits the form
app.post('/short', shortUrl);

// Dynamic route to handle redirection using the shortCode
// Example: /abc123 → redirects to original URL
app.get("/:shortCode", getOriginalUrl);

// Define server port from environment or default to 1000 and start the server
const port = process.env.PORT || 1000;
app.listen(port, () => console.log(`server is running on port ${port}`));
