const ReunionModel = require("../models/ReunionModel");
const cloudinary = require("../middleware/cloudinary");

module.exports.createUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const existMobile = await ReunionModel.findOne({ mobile: req.body.mobile });
    if (existMobile) {
      console.log("User found in User Model by Phone");
      return res
        .status(201)
        .json({ error: `This phone is already registerd, try with a new one` });
    }
  } catch (error) {
    res.status(500).json(error);
  }
  try {
    const existEmail = await ReunionModel.findOne({ email: req.body.email });
    if (existEmail) {
      console.log("User found in User Model by Email");
      return res
        .status(201)
        .json({ error: `This Email is already registerd, try with a new one` });
    }
  } catch (error) {
    res.status(500).json(error);
  }

  // const photo = await cloudinary.uploader.upload(req.file.path);
  // //const photo = req.file.filename;
  // req.body.photo = photo.url;

  try {
    const newData = new ReunionModel(req.body);
    const savedData = await newData.save();
    // console.log(savedData._id);
    res.status(200).json({
      success: `${savedData._id}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports.getDataById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const data = await ReunionModel.findById(id)
      .populate("batch", { label: 1, _id: 1 })
      .populate("department", { label: 1, _id: 1 })
      .populate("faculty", { label: 1, _id: 1 });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const value = req.body;
    const data = await ReunionModel.findByIdAndUpdate(req.body._id, value);

    res.status(200).json({
      ok: `${data._id}`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
