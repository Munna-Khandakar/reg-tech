const router = require("express").Router();
// const multer = require("multer");
// const { v4: uuidv4 } = require("uuid");
// let path = require("path");
const { createUser } = require("../controllers/registrationController");
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

module.exports = router;
