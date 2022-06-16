const UserModel = require("../models/UserModel");
const cloudinary = require("../middleware/cloudinary");
// POST: api/registration
// CREATE department
module.exports.createUser = async (req, res, next) => {
  const photo = await cloudinary.uploader.upload(req.file.path);
  //const photo = req.file.filename;
  req.body.photo = photo.url;
  //console.log(req.body);
  // const newData = new UserModel(req.body);
  console.log("check 1");
  try {
    const newData = new UserModel(req.body);
    const savedData = await newData.save();
    console.log("check 2");
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getAllUser = async (req, res, next) => {
  try {
    const data = await UserModel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
