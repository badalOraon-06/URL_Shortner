// Importing the Url model which defines the structure of our URL documents in MongoDB
import { Url } from "../Models/Url.js";

// Importing 'shortid' library to generate unique short codes
import shortid from "shortid";

// Controller function to generate short URL from a long URL
export const shortUrl = async (req, res) => {
  // Extract the long URL from the request body (submitted from a form or client)
  const longUrl = req.body.longUrl;

  // Generate a unique short code using shortid
  const shortCode = shortid.generate();

  // Construct the full short URL (can be customized for deployment)
  const shortUrl = `http://localhost:1000/${shortCode}`;

  // Create a new document to store in MongoDB with shortCode and longUrl
  const newUrl = new Url({ shortCode, longUrl });

  // Save the document to the database
  await newUrl.save();

  // Log the saved URL object to console for debugging
  console.log("short saved = ", newUrl);

  // Render the index.ejs file and pass the generated shortUrl for display
  res.render("index.ejs", { shortUrl });
};

// Controller function to handle requests to short URLs and redirect to original URL
export const getOriginalUrl = async (req, res) => {
  // Extract the shortCode from URL parameters (e.g., /abc123 → abc123)
  const shortCode = req.params.shortCode;

  // Look up the original URL in the database using the shortCode
  const originalUrl = await Url.findOne({ shortCode });

  // If found, redirect the user to the original long URL
  if (originalUrl) {
    res.redirect(originalUrl.longUrl);
  } else {
    // If not found, return a JSON error message
    res.json({ message: "Invalid shortcode" });
  }
};
