const express = require("express");
const {
  createPortfolio,
  getPortfolioController,
  updatePortfolioController,
  getSinglePortfolioController,
  deletePortfolioController,
} = require("../controller/portfolio.controller");
const router = express.Router();

router.post("/create", createPortfolio);
router.get("/all", getPortfolioController);
router.get("/:portfolioId", getSinglePortfolioController);
router.put("/update/:portfolioId", updatePortfolioController);
router.delete("/delete/:portfolioId", deletePortfolioController);

module.exports = router;
