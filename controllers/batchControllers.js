const BatchModel = require("../models/BatchModel");

// GET: api/batches
// sends all the batche name and id
module.exports.getAllBatches = async (req, res, next) => {
  try {
    const batches = await BatchModel.find().sort({ label: 1 });
    return res.status(200).json(batches);
  } catch (error) {
    res.status(500).json(error);
  }
};

// POST: api/batch
// create a batch
module.exports.postBatch = async (req, res, next) => {
  const newData = new BatchModel(req.body);
  try {
    const savedData = await newData.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports.getBatchValue = async (req, res, next) => {
  try {
    const data = await BatchModel.findById(req.params.id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
