const mongoose = require("mongoose");

const mySchema = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      unique: true,
    },
    session: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Batch", mySchema);
