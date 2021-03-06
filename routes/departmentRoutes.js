const {
  getAllDepartments,
  postDepartment,
  getDepartmentValue,
} = require("../controllers/departmentControllers");

const router = require("express").Router();

router.get("/departments/:id", getAllDepartments);

router.post("/department", postDepartment);

router.get("/departmentValue/:id", getDepartmentValue);

module.exports = router;
