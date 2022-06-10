const mongoose = require("mongoose");

const mySchema = mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },

    created_at: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Session", mySchema);
