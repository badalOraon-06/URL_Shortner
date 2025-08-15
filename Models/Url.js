// Importing mongoose library to define schema and model
import mongoose from "mongoose";

// Creating a schema for storing URLs in MongoDB
const urlSchema = new mongoose.Schema({
  shortCode: String, // The unique short code (e.g., abc123)
  longUrl: String    // The original long URL (e.g., https://example.com/page)
});

// Creating a Mongoose model named "shortURL" using the urlSchema
// This model will interact with the "shorturls" collection in MongoDB
export const Url = mongoose.model("shortURL", urlSchema);
