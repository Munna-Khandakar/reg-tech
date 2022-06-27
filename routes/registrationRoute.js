const router = require("express").Router();
// const multer = require("multer");
// const { v4: uuidv4 } = require("uuid");
// let path = require("path");
const {
  createUser,
  getAllUser,
  exportAllUser,
  getUsers,
} = require("../controllers/registrationController");
const upload = require("../middleware/multer");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "images");
//   },
//   filename: function (req, file, cb) {
//     cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
//   if (allowedFileTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// let upload = multer({ storage, fileFilter });

router.post("/registration", upload.single("photo"), createUser);
router.get("/", getAllUser);
router.get("/exportAllUser", exportAllUser);
router.get("/users/:page", getUsers);

module.exports = router;
