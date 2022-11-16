const mongoose = require("mongoose");

const mySchema = mongoose.Schema(
  {
    // batch: {
    //   type: String,
    // },
    batch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Batch",
      required: true,
    },
    faculty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Faculty",
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    mobile: {
      type: String,
      unique: true,
      required: true,
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
      unique: true,
      required: true,
    },
    emergencyContact: {
      type: String,
    },
    fbId: {
      type: String,
    },
    address: {
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
    profession: {
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
    guest: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reunion", mySchema);
