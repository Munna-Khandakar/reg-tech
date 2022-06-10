const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const { MONGO_URI } = require("./config/keys");
//const requestIp = require("request-ip");

//TODO: MIDDLEWARE

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO: Routes

app.use("/api", require("./routes/batchRoutes"));
app.use("/api", require("./routes/departmentRoutes"));
app.use("/api", require("./routes/sessionRoutes"));
app.use("/api", require("./routes/registrationRoute"));
app.use("/api", require("./routes/verificationRoutes"));
// app.use("/api", require("./routes/myPlatesRoutes"));
// app.use("/api", require("./routes/deliveryManRoutes"));
// app.use("/admin/api", require("./routes/adminRoutes"));
// app.use("/api", require("./routes/tutorialRoutes"));
// app.use("/api", require("./routes/deliveryChargeRoutes"));

// TODO: SERVER AND DATABASE

app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

// const root = require('path').join(__dirname, 'frontend', 'build')
// app.use(express.static(root));
// app.get("*", (req, res) => {
//     res.sendFile('index.html', { root });
// })

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
