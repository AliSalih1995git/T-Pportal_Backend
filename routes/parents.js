const {
  getResultsByStudent,
  getAllStudentData,
} = require("../controllers/parentContoller");

const router = require("express").Router();

router.get("/results/:studentId", getResultsByStudent);
router.get("/getAllStudentData", getAllStudentData);

module.exports = router;
