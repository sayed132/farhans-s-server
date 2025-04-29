const Profile = require("../models/profile.model");

const createProfile = async (req, res) => {
  try {
    const newProfile = new Profile(req.body);
    await newProfile.save();
    console.log(newProfile, "--> profile created successfully profileController line 7");
    res
      .status(201)
      .json({ message: "user created successfully!", newProfile });
  } catch (error) {}
};

const getProfileController = async (req, res, next) => {
  try {
    const user = await Profile.find();
    if (!user) {
      throw new CustomError("no users found", 404);
    }
    res.status(200).send({
      statusBar: `all user fetched successfully`,
      user,
    });
  } catch (error) {}
};

const updateProfileController = async (req, res) => {
  const _id = req.params.id;
  console.log(_id, "user found");
  const updateData = req.body;
  try {
    const userToUpdate = await Profile.findById(_id);
    if (!userToUpdate) {
      res.status(404).json({ message: "user not found!" });
    }

    Object.assign(userToUpdate, updateData);

    await userToUpdate.save();

    res
      .status(200)
      .json({ message: "User updated successfully!", userToUpdate });
  } catch (error) {}
};


module.exports = {
  createProfile,
  getProfileController,
  updateProfileController,
};
