const { mongoose } = require("mongoose");

const ServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    image: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // automatically time updated when update or create post
  }
);

const Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;
