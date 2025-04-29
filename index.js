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

const port = process.env.PORT || 8040;

// api router
app.use("/profile", profileRoute);
app.use("/service", serviceRoute);
app.use("/portfolio", portfolioRoute);
app.use("/edu", eduRoute);

app.listen(port, async () => {
  console.log(`farhana's portfolio server running on http://localhost:${port}`);
  await connectDB();
});

app.get("/", (req, res) => {
  res.send("welcome farhana's portfolio server");
});
