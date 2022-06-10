const UserModel = require("../models/UserModel");

// POST: api/registration
// CREATE department
module.exports.createUser = async (req, res, next) => {
  const photo = req.file.filename;
  req.body.photo = photo;
  console.log(req.body);
  const newData = new UserModel(req.body);
  try {
    const savedData = await newData.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json(error);
  }
};
