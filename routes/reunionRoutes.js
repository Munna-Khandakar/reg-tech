const {
  createUser,
  getDataById,
  updateUser,
  getUserCount,
  getFilteredUsersForReunion,
  getUsers,
  getSearchUser,
} = require("../controllers/reunionController");
const upload = require("../middleware/multer");
const router = require("express").Router();

router.post("/reunion/registration", upload.single("photo2"), createUser);
router.put("/reunion/registration", upload.single("photo2"), updateUser);
router.get("/reunion/id/:id", getDataById);
router.get("/reunion/count/user", getUserCount);
router.get("/view/reunion/:filter/:id/:page", getFilteredUsersForReunion);
router.get("/reunion/users/:page", getUsers);
router.get("/find/reunion/:search", getSearchUser);
module.exports = router;
