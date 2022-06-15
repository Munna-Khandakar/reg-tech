const mongoose = require("mongoose");

const mySchema = mongoose.Schema(
  {
    // batch: {
    //   type: String,
    // },
    batch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Batch",
    },
    faculty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Faculty",
    },
    dept: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },
    mobile: {
      type: String,
    },
    secondaryMobile: {
      type: String,
    },
    fullName: {
      type: String,
    },
    nickName: {
      type: String,
    },
    fatherName: {
      type: String,
    },
    motherName: {
      type: String,
    },
    streetAddress: {
      type: String,
    },
    streetAddressLine2: {
      type: String,
    },
    city: {
      type: String,
    },
    zipCode: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    email: {
      type: String,
    },
    emergencyContact: {
      type: String,
    },
    fbId: {
      type: String,
    },
    dob: {
      type: String,
    },
    nationality: {
      type: String,
    },
    bloodGroup: {
      type: String,
    },
    religion: {
      type: String,
    },
    occupation: {
      type: String,
    },
    designation: {
      type: String,
    },
    companyName: {
      type: String,
    },
    maritalStatus: {
      type: String,
    },
    hallRoomNumber: {
      type: String,
    },
    wishBox: {
      type: String,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", mySchema);
