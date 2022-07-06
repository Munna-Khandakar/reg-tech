const UserModel = require("../models/UserModel");
const DepartmentModel = require("../models/DepartmentModel");
const BatchModel = require("../models/BatchModel");
const cloudinary = require("../middleware/cloudinary");
const { exportToExcel } = require("../config/exportToExcel");
const { exportToExcelByBatch } = require("../config/exportToExcelByBatch");
const { exportToExcelByDept } = require("../config/exportToExcelByDept");
const { db } = require("../models/UserModel");
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
    // console.log(savedData._id);
    res.status(200).json({
      success: `${savedData._id}`,
    });
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

module.exports.exportAllUser = async (req, res, next) => {
  const exportedData = [];
  try {
    const data = await UserModel.find()
      .sort({ updatedAt: -1 })
      .populate("batch", { label: 1, _id: 0 })
      .populate("department", { label: 1, _id: 0 })
      .populate("faculty", { label: 1, _id: 0 });

    //console.log(data);
    data.forEach((user) => {
      exportedData.push({
        fullName: user.fullName,
        nickName: user.nickName,
        department: user.department && user.department.label,
        batch: user.batch && user.batch.label,
        faculty: user.faculty && user.faculty.label,
        mobile: user.mobile && user.mobile,
        whatsapp: user.secondaryMobile && user.secondaryMobile,
        email: user.email,
        fatherName: user.fatherName,
        motherName: user.motherName,
        streetAddress: user.streetAddress,
        streetAddressLine2: user.streetAddressLine2,
        city: user.city,
        zipCode: user.zipCode,
        state: user.state,
        country: user.country,
        emergencyContact: user.emergencyContact,
        fbId: user.fbId,
        dob: user.dob,
        nationality: user.nationality,
        bloodGroup: user.bloodGroup,
        religion: user.religion,
        occupation: user.occupation,
        designation: user.designation,
        companyName: user.companyName,
        maritalStatus: user.maritalStatus,
        hallRoomNumber: user.hallRoomNumber,
        wishBox: user.wishBox,
        photo: user.photo,
      });
    });

    //exportToExcel(JSON.stringify(exportedData));
    exportToExcel(exportedData);
    // console.log(JSON.stringify(exportedData));
    // res.status(200).json(data);
    res.download("./users.xlsx");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports.getUsers = async (req, res, next) => {
  const { page } = req.params;
  const limit = process.env.PAGE_LIMIT;
  // const page = 1;
  try {
    const data = await UserModel.find()
      .sort({ updatedAt: -1 })
      .populate("batch", { label: 1, _id: 0 })
      .populate("department", { label: 1, _id: 0 })
      .populate("faculty", { label: 1, _id: 0 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getUser = async (req, res, next) => {
  const { id } = req.params;

  // const page = 1;
  try {
    const data = await UserModel.findById(id)
      .populate("batch", { label: 1, _id: 0 })
      .populate("department", { label: 1, _id: 0 })
      .populate("faculty", { label: 1, _id: 0 });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getUserCount = async (req, res, next) => {
  let data = {
    total: "",
    department: [],
    batch: [],
  };
  try {
    //departmentwise data
    const department = await DepartmentModel.find();
    for (let i = 0; i < department.length; i++) {
      const departmentCount = await UserModel.find({
        department: department[i]._id,
      }).count();
      data.department.push({
        id: department[i]._id,
        department: department[i].label,
        count: departmentCount,
      });
    }

    //batchwise data
    const batch = await BatchModel.find();
    for (let i = 0; i < batch.length; i++) {
      const batchCount = await UserModel.find({
        batch: batch[i]._id,
      }).count();
      data.batch.push({
        id: batch[i]._id,
        batch: batch[i].label,
        count: batchCount,
      });
    }

    // total count
    const totalCount = await UserModel.find().count();
    data.total = totalCount;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.exportFilteredUser = async (req, res, next) => {
  const exportedData = [];
  const { filter, id } = req.params;

  if (filter === "department") {
    try {
      const fileName = await DepartmentModel.findOne({ _id: id });
      const data = await UserModel.find({ department: id })
        .populate("batch")
        .populate("department")
        .populate("faculty")
        .sort({ "department.label": 1, fullName: 1 });

      //console.log(data);
      data.forEach((user) => {
        exportedData.push({
          fullName: user.fullName,
          nickName: user.nickName,
          batch: user.batch && user.batch.label,
          zilla: user.state,
          country: user.country,
          profession: `${user.occupation},${user.designation},${user.companyName}`,
          hallRoomNumber: user.hallRoomNumber,
          wishBox: user.wishBox,
        });
      });

      //exportToExcel(JSON.stringify(exportedData));
      exportToExcelByDept(exportedData, `${fileName.code} dept student list`);
      // console.log(JSON.stringify(exportedData));
      // res.status(200).json(data);
      res.download("./users.xlsx");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  } else if (filter === "batch") {
    try {
      const deptFullName = await BatchModel.findOne({ _id: id });
      const deptSplit = deptFullName.label.split(" ");
      const fileName = deptSplit[0];
      console.log(fileName);
      const data = await UserModel.find({ batch: id })
        .populate("batch")
        .populate("department")
        .populate("faculty")
        .sort({ "batch.label": 1, fullName: 1 });

      //console.log(data);
      data.forEach((user) => {
        exportedData.push({
          fullName: user.fullName,
          nickName: user.nickName,
          department: user.department && user.department.label,
          zilla: user.state,
          country: user.country,
          profession: `${user.occupation},${user.designation},${user.companyName}`,
          hallRoomNumber: user.hallRoomNumber,
          wishBox: user.wishBox,
        });
      });

      //exportToExcel(JSON.stringify(exportedData));
      exportToExcelByBatch(exportedData, `${fileName} batch student list`);
      // console.log(JSON.stringify(exportedData));
      // res.status(200).json(data);
      res.download("./users.xlsx");
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
};

module.exports.getFilteredUsers = async (req, res, next) => {
  const { id, filter, page } = req.params;
  const limit = process.env.PAGE_LIMIT;
  let query = {};
  if (filter === "department") {
    query = { department: id };
  } else {
    query = { batch: id };
  }
  try {
    const data = await UserModel.find(query)
      .sort({ updatedAt: -1 })
      .populate("batch", { label: 1, _id: 0 })
      .populate("department", { label: 1, _id: 0 })
      .populate("faculty", { label: 1, _id: 0 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getSearchUser = async (req, res, next) => {
  const { search } = req.params;

  try {
    const data = await UserModel.find({
      $or: [
        { fullName: { $regex: search, $options: "i" } },
        { nickName: { $regex: search, $options: "i" } },
        { mobile: { $regex: search, $options: "i" } },
      ],
    })
      .populate("batch", { label: 1, _id: 0 })
      .populate("department", { label: 1, _id: 0 })
      .populate("faculty", { label: 1, _id: 0 });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getFilteredSearchUser = async (req, res, next) => {
  let query = {};
  const { id, filter, search } = req.params;
  if (filter === "department") {
    query = {
      $and: [
        { department: id },
        {
          $or: [
            { fullName: { $regex: search, $options: "i" } },
            { nickName: { $regex: search, $options: "i" } },
            { mobile: { $regex: search, $options: "i" } },
          ],
        },
      ],
    };
  }
  if (filter === "batch") {
    query = {
      $and: [
        { batch: id },
        {
          $or: [
            { fullName: { $regex: search, $options: "i" } },
            { nickName: { $regex: search, $options: "i" } },
            { mobile: { $regex: search, $options: "i" } },
          ],
        },
      ],
    };
  }
  try {
    const data = await UserModel.find(query)
      .populate("batch", { label: 1, _id: 0 })
      .populate("department", { label: 1, _id: 0 })
      .populate("faculty", { label: 1, _id: 0 });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
