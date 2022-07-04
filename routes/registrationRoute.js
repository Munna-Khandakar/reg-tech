const router = require("express").Router();

const {
  createUser,
  getAllUser,
  exportAllUser,
  getUsers,
  getUser,
  getUserCount,
  exportFilteredUser,
} = require("../controllers/registrationController");
const upload = require("../middleware/multer");
router.post("/registration", upload.single("photo"), createUser);
router.get("/", getAllUser);
router.get("/exportAllUser", exportAllUser);
router.get("/users/:page", getUsers);
router.get("/user/:id", getUser);
router.get("/count/user", getUserCount);
router.get("/export/:filter/:id", exportFilteredUser);

module.exports = router;
