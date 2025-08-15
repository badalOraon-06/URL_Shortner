# Lecture_16_project1

A simple Node.js URL shortener project using Express, MongoDB, and EJS.

## Features

- Shorten long URLs
- Store and retrieve URLs from MongoDB
- EJS template for UI

## Project Structure

```
Lecture_16_project1/
├── Controllers/
│   └── url.js
├── Models/
│   └── Url.js
├── views/
│   └── index.ejs
├── server.js
├── package.json
└── .gitignore
```

## Setup & Run

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd Lecture_16_project1
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your MongoDB connection string in a `.env` file:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```sh
   node server.js
   ```

## Usage

- Open your browser and go to `http://localhost:PORT` (replace PORT with your server port).
- Enter a long URL to get a shortened version.

## Notes

- Make sure MongoDB is running and accessible.
- For development, you can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## License

MIT
