const { mongoose } = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
    },
    client: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    cv: {
      type: String,
      trim: true,
    },
    resume: {
      type: String,
      trim: true,
    },
    facebook: {
      type: String,
      trim: true,
    },
    linkedin: {
      type: String,
      trim: true,
    },
    instagram: {
      type: String,
      trim: true,
    },
    twitter: {
      type: String,
      trim: true,
    },
    workTitle: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    aboutMe: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // automatically time updated when update or create post
  }
);

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
