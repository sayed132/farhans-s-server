const { mongoose } = require("mongoose");

const PortfolioSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    desc: {
      type: String,
      trim: true,
    },
    tech: {
      type: String,
      trim: true,
    },
    time: {
      type: String,
      trim: true,
    },
    liveLink: {
      type: String,
      trim: true,
    },
    WorkLink: {
      type: String,
      trim: true,
    },
    WorkLink2: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // automatically time updated when update or create post
  }
);

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

module.exports = Portfolio;
