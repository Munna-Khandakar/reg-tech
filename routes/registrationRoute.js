const router = require("express").Router();

const {
  createUser,
  getAllUser,
  exportAllUser,
  getUsers,
  getUser,
  getUserCount,
  exportFilteredUser,
  getFilteredUsers,
  getSearchUser,
  getFilteredSearchUser,
} = require("../controllers/registrationController");
const upload = require("../middleware/multer");
router.post("/registration", upload.single("photo"), createUser);
router.get("/", getAllUser);
router.get("/exportAllUser", exportAllUser);
router.get("/users/:page", getUsers);
router.get("/user/:id", getUser);
router.get("/count/user", getUserCount);
router.get("/export/:filter/:id", exportFilteredUser);
router.get("/view/:filter/:id/:page", getFilteredUsers);
router.get("/find/all/:search", getSearchUser);
router.get("/find/:filter/:id/:search", getFilteredSearchUser);

module.exports = router;
