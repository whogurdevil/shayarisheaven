// Importing the route handlers

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToMongo = require("./db").db;
const app = express();
app.use(cors());
// Connect to MongoDB
connectToMongo();

// Middleware to parse URL-encoded bodies
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));

//User Routes
const authRoute = require("./routes/Authentication/Auth");
const adminROute = require("./routes/adminControlRoutes/adminControl");
const sheyarRoutes = require("./routes/sheyar");
app.use("/api/auth", authRoute);
app.use("/api/admin", adminROute);
app.use("/api/sheyar", sheyarRoutes);
// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
// module.exports = app
