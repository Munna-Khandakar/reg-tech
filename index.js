const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const { MONGO_URI } = require("./config/keys");
const { api } = require("./middleware/cloudinary");
const SSLCommerzPayment = require("sslcommerz-lts");

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

app.get("/api/ssl-request", async (req, res) => {
  const data = {
    total_amount: 100,
    currency: "BDT",
    tran_id: "REF123",
    success_url: `${process.env.ROOT}/ssl-payment-success`,
    fail_url: `${process.env.ROOT}/ssl-payment-fail`,
    cancel_url: `${process.env.ROOT}/ssl-payment-cancel`,
    shipping_method: "No",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: "cust@yahoo.com",
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    multi_card_name: "mastercard",
    value_a: "ref001_A",
    value_b: "ref002_B",
    value_c: "ref003_C",
    value_d: "ref004_D",
    ipn_url: `${process.env.ROOT}/ssl-payment-notification`,
  };

  const sslcommerz = new SSLCommerzPayment(
    process.env.STORE_ID,
    process.env.STORE_PASS,
    false
  ); //true for live default false for sandbox
  sslcommerz.init(data).then((data) => {
    //process the response that got from sslcommerz
    //https://developer.sslcommerz.com/doc/v4/#returned-parameters
    console.log(data);
    if (data?.GatewayPageURL) {
      return res.status(200).redirect(data?.GatewayPageURL);
    } else {
      return res.status(400).json({
        message: "Session was not successful",
      });
    }
  });
});

app.post("/ssl-payment-notification", async (req, res) => {
  return res.status(200).json({
    data: req.body,
    message: "Payment notification",
  });
});

app.post("/ssl-payment-success", async (req, res) => {
  return res.status(200).json({
    data: req.body,
    message: "Payment success",
  });
});

app.post("/ssl-payment-fail", async (req, res) => {
  return res.status(200).json({
    data: req.body,
    message: "Payment failed",
  });
});

app.post("/ssl-payment-cancel", async (req, res) => {
  return res.status(200).json({
    data: req.body,
    message: "Payment cancelled",
  });
});

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
