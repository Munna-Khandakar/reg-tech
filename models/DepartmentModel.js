const mongoose = require("mongoose");

const mySchema = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
      unique: true,
    },
    code: {
      type: String,
      unique: true,
    },

    faculty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Faculty",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Department", mySchema);
