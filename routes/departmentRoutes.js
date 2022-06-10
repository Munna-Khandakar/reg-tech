const {
  getAllDepartments,
  postDepartment,
} = require("../controllers/departmentControllers");

const router = require("express").Router();

router.get("/departments", getAllDepartments);

router.post("/department", postDepartment);

module.exports = router;
