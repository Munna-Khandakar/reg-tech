const {
  getAllSessions,
  postSessions,
} = require("../controllers/sessionControllers");

const router = require("express").Router();

router.get("/sessions", getAllSessions);

router.post("/session", postSessions);

module.exports = router;
