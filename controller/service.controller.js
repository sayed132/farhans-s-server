const Service = require("../models/service.model");

const createService = async (req, res) => {
  try {
    const newService = new Service(req.body);
    await newService.save();
    console.log(
      newService,
      "--> service created successfully profileController line 7"
    );
    res
      .status(201)
      .json({ message: "service created successfully!", newService });
  } catch (error) {}
};

const getServiceController = async (req, res,) => {
  try {
    const service = await Service.find();
    if (!service) {
        res.status(402).json({ message: "service not found!" });
    }
    res.status(200).send({
      statusBar: `all user fetched successfully`,
      service,
    });
  } catch (error) {}
};

const deleteServiceController = async (req, res) => {
  const { serviceId } = req.params;

  try {
    const service = await Service.findById(serviceId);

    if (!service) {
      res.status(402).json({ message: "service not found!" });
    }

    await Service.findOneAndUpdate(
      { services: serviceId },
      { $pull: { services: serviceId } },
      { new: true }
    );

    await service.deleteOne();
    res.status(200).json({ message: "service has been deleted!" });
  } catch (error) {
    //   next(error);
  }
};

const updateServiceController = async (req, res, next) => {
  const { serviceId } = req.params;
  const { name, image, desc } = req.body;

  try {
    const serviceToUpdate = await Service.findById(serviceId);
    if (!serviceToUpdate) {
      res.status(404).json({ message: "Service not found!" });
    }

    const updatedService = await Service.findByIdAndUpdate(
      serviceId,
      { name, image, desc },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "Service updated successfully!", updatedService });
  } catch (error) {}
};

module.exports = {
  createService,
  getServiceController,
  deleteServiceController,
  updateServiceController,
};
