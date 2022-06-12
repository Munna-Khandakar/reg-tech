const DepartmentModel = require("../models/DepartmentModel");

// GET: api/departments
// sends all the department name and id
module.exports.getAllDepartments = async (req, res, next) => {
  try {
    const departments = await DepartmentModel.find();
    return res.status(200).json(departments);
  } catch (error) {
    res.status(500).json(error);
  }
};

// POST: api/department
// CREATE department
module.exports.postDepartment = async (req, res, next) => {
  const newData = new DepartmentModel(req.body);
  try {
    const savedData = await newData.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getDepartmentValue = async (req, res, next) => {
  try {
    const data = await DepartmentModel.findById(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
