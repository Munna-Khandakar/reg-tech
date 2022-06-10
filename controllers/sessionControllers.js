// GET: api/sessions

const SessionModel = require("../models/SessionModel");

// sends all the session name and id
module.exports.getAllSessions = async (req, res, next) => {
  try {
    const sessions = await SessionModel.find();
    return res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json(error);
  }
};

// POST: api/sessions
// CREATE session
module.exports.postSessions = async (req, res, next) => {
  const newData = new SessionModel(req.body);
  try {
    const savedData = await newData.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json(error);
  }
};
