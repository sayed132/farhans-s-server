const Education = require("../models/education.model");

const createEducation = async (req, res) => {
  try {
    const newEducation= new Education(req.body);
    await newEducation.save();
    console.log(
        newEducation,
      "--> newEducation created successfully profileController line 10"
    );
    res
      .status(201)
      .json({
        message: "portfolio created successfully!",
        newEducation,
      });
  } catch (error) {}
};

const getAllEduController = async (req, res, next) => {
  try {
    const education = await Education.find();
    if (!education) {
      res.status(402).json({ message: "education not found!" });
    }
    res.status(200).send({
      statusBar: `all education fetched successfully`,
      education,
    });
  } catch (error) {}
};

const updateEduController = async (req, res) => {
  const { eduId } = req.params;
  const { instName, title, time, certificate, address, } = req.body;

  try {
    const eduToUpdate = await Education.findById(eduId);
    if (!eduToUpdate) {
      res.status(404).json({ message: "education item not found!" });
    }

    const updatedEdu= await Education.findByIdAndUpdate(
      eduId,
      { instName, title, time, certificate, address},
      { new: true }
    );

    res
      .status(200)
      .json({ message: "education updated successfully!", updatedEdu });
  } catch (error) {}
};

const deleteEduController = async (req, res) => {
    const { eduId } = req.params;
  
    try {
      const education = await Education.findById(eduId);
  
      if (!education) {
        res.status(402).json({ message: "education item  not found!" });
      }
  
      await Education.findOneAndUpdate(
        { educations: eduId },
        { $pull: { portfolio: eduId } },
        { new: true }
      );
  
      await education.deleteOne();
      res.status(200).json({ message: "education item has been deleted!" });
    } catch (error) {
      //   next(error);
    }
  };

module.exports = {
    createEducation,
    getAllEduController,
    updateEduController,
    deleteEduController
};
