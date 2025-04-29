const Portfolio = require("../models/portfolio.model");

const createPortfolio = async (req, res) => {
  try {
    const newPortfolio = new Portfolio(req.body);
    await newPortfolio.save();
    console.log(
      newPortfolio,
      "--> portfolio created successfully profileController line 10"
    );
    res
      .status(201)
      .json({
        message: "portfolio created successfully!",
        newPortfolio,
      });
  } catch (error) {}
};

const getPortfolioController = async (req, res, next) => {
  try {
    const portfolio = await Portfolio.find();
    if (!portfolio) {
      res.status(402).json({ message: "portfolio not found!" });
    }
    res.status(200).send({
      statusBar: `all portfolio fetched successfully`,
      portfolio,
    });
  } catch (error) {}
};

const getSinglePortfolioController = async (req, res) => {
  const { portfolioId } = req.params;
  console.log(portfolioId);
  try {
    const singlePortfolio = await Portfolio.findById(portfolioId);
    console.log(singlePortfolio);
    if(!singlePortfolio){
      res.status(402).json({ message: "portfolio not found!" });
    }

    res.status(200).send({
      statusBar: `single portfolio fetched successfully`,
      singlePortfolio,
    });
  } catch (error) {}
};

const updatePortfolioController = async (req, res) => {
  const { portfolioId } = req.params;
  const { name, image, desc, time, tech, link } = req.body;

  try {
    const portfolioToUpdate = await Portfolio.findById(portfolioId);
    if (!portfolioToUpdate) {
      res.status(404).json({ message: "portfolio not found!" });
    }

    const updatedPortfolio = await Portfolio.findByIdAndUpdate(
      portfolioId,
      { name, image, desc, time, tech, link },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "portfolio updated successfully!", updatedPortfolio });
  } catch (error) {}
};

const deletePortfolioController = async (req, res) => {
    const { portfolioId } = req.params;
  
    try {
      const portfolio = await Portfolio.findById(portfolioId);
  
      if (!portfolio) {
        res.status(402).json({ message: "portfolio not found!" });
      }
  
      await Portfolio.findOneAndUpdate(
        { portfolios: portfolioId },
        { $pull: { portfolio: portfolioId } },
        { new: true }
      );
  
      await portfolio.deleteOne();
      res.status(200).json({ message: "portfolio has been deleted!" });
    } catch (error) {
      //   next(error);
    }
  };

module.exports = {
  createPortfolio,
  getPortfolioController,
  updatePortfolioController,
  getSinglePortfolioController,
  deletePortfolioController
};
