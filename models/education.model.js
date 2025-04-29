const { mongoose } = require("mongoose");

const EducationSchema = new mongoose.Schema(
  {
    instName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    title: {
      type: String,
      trim: true,
    },
    time: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    certificate: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // automatically time updated when update or create post
  }
);

const Education = mongoose.model("Education", EducationSchema);

module.exports = Education;
