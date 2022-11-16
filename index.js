const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const { MONGO_URI } = require("./config/keys");
const { api } = require("./middleware/cloudinary");

// MIDDLEWARE

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  Routes

app.use("/api", require("./routes/batchRoutes"));
app.use("/api", require("./routes/departmentRoutes"));
app.use("/api", require("./routes/sessionRoutes"));
app.use("/api", require("./routes/registrationRoute"));
app.use("/api", require("./routes/verificationRoutes"));
app.use("/api", require("./routes/facultyRoutes"));
app.use("/api", require("./routes/reunionRoutes"));

const root = require("path").join(__dirname, "frontend", "build");
app.use(express.static(root));
app.get("*", (req, res) => {
  res.sendFile("index.html", { root });
});

const PORT = process.env.PORT || 5000;
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("database connected");
    app.listen(PORT, () => {
      console.log("Server is running on port: " + PORT);
    });
  })
  .catch((e) => {
    console.log("Something went wrong", e);
  });

module.exports = app;
