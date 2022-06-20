const UserModel = require("../models/UserModel");
const cloudinary = require("../middleware/cloudinary");
// POST: api/registration
// CREATE department
module.exports.createUser = async (req, res, next) => {
  try {
    const existMobile = await UserModel.findOne({ mobile: req.body.mobile });
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
    const existEmail = await UserModel.findOne({ email: req.body.email });
    if (existEmail) {
      console.log("User found in User Model by Email");
      return res
        .status(201)
        .json({ error: `This Email is already registerd, try with a new one` });
    }
  } catch (error) {
    res.status(500).json(error);
  }

  // submit the form
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
    console.log(error);
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
