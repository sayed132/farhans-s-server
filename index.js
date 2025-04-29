const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const { mongoose } = require("mongoose");
const connectDB = require("./database/db");

// router location
const profileRoute = require("./router/profile.router");
const serviceRoute = require("./router/service.router");
const portfolioRoute = require("./router/portfolio.router");
const eduRoute = require("./router/edu.router");

dotenv.config();
app.use(express.json());
app.use(cors());

// app.use(cors({
//   origin: [
//     'https://sanjidasuchy-portfolio.web.app/',
//     'https://sanjidasuchy-portfolio.firebaseapp.com/',
//     'http://localhost:5173',
//   ]
// }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// api router
app.use("/api/profile", profileRoute);
app.use("/api/service", serviceRoute);
app.use("/api/portfolio", portfolioRoute);
app.use("/api/edu", eduRoute);

app.get("/", (req, res) => {
  res.send("welcome farhana's portfolio server");
});

const port = process.env.PORT || 8040;

// Only start the server if not in production
if (process.env.NODE_ENV !== "production") {
  app.listen(port, async () => {
    console.log(
      `farhana's portfolio server running on http://localhost:${port}`
    );
    await connectDB();
  });
}

// Export the app for Vercel
module.exports = app;
