const {
  createUser,
  getDataById,
  updateUser,
} = require("../controllers/reunionController");
const upload = require("../middleware/multer");
const router = require("express").Router();

router.post("/reunion/registration", upload.single("photo2"), createUser);
router.put("/reunion/registration", upload.single("photo2"), updateUser);

router.get("/reunion/id/:id", getDataById);
module.exports = router;
