const {
  getAllFaculties,
  createFaculty,
} = require("../controllers/facultyController");

const router = require("express").Router();

router.get("/faculties", getAllFaculties);
router.post("/faculty", createFaculty);

module.exports = router;
