const FacultyModel = require("../models/FacultyModel");

// GET: api/faculties

module.exports.getAllFaculties = async (req, res, next) => {
  try {
    const batches = await FacultyModel.find();
    return res.status(200).json(batches);
  } catch (error) {
    res.status(500).json(error);
  }
};

// POST: api/faculty

module.exports.createFaculty = async (req, res, next) => {
  const newData = new FacultyModel(req.body);
  try {
    const savedData = await newData.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json(error);
  }
};
