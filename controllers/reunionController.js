const ReunionModel = require("../models/ReunionModel");
const DepartmentModel = require("../models/DepartmentModel");
const BatchModel = require("../models/BatchModel");

module.exports.createUser = async (req, res, next) => {
  try {
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
      const departmentCount = await ReunionModel.find({
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
      const batchCount = await ReunionModel.find({
        batch: batch[i]._id,
      }).count();
      data.batch.push({
        id: batch[i]._id,
        batch: batch[i].label,
        count: batchCount,
      });
    }

    // total count
    const totalCount = await ReunionModel.find().count();
    data.total = totalCount;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getFilteredUsersForReunion = async (req, res, next) => {
  const { id, filter, page } = req.params;
  const limit = process.env.PAGE_LIMIT;
  let query = {};
  if (filter === "department") {
    query = { department: id };
  } else {
    query = { batch: id };
  }
  try {
    const data = await ReunionModel.find(query)
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

module.exports.getUsers = async (req, res, next) => {
  const { page } = req.params;
  const limit = process.env.PAGE_LIMIT;
  // const page = 1;
  try {
    const data = await ReunionModel.find()
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
    const data = await ReunionModel.find({
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

module.exports.checkMobileNumbar = async (req, res, next) => {
  try {
    const existMobile = await ReunionModel.findOne({
      mobile: req.params.mobile,
    });
    if (existMobile) {
      console.log("User found in User Model by Phone");
      return res.status(201).json({ exists: `You can not submit form twice` });
    } else {
      return res.status(201).json({ ok: `You can submit another form` });
    }
  } catch (error) {
    res.status(500).json(error);
  }

  // try {
  //   const newData = new ReunionModel(req.body);
  //   const savedData = await newData.save();
  //   // console.log(savedData._id);
  //   res.status(200).json({
  //     success: `${savedData._id}`,
  //   });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json(error);
  // }
};
