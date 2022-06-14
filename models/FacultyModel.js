const mongoose = require("mongoose");

const mySchema = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Faculty", mySchema);
