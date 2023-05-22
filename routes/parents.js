const {
  getResultsByStudent,
  getAllStudentData,
  getAllParentData,
} = require("../controllers/parentContoller");

const router = require("express").Router();

router.get("/getAllParentData", getAllParentData);
router.get("/getAllStudentData", getAllStudentData);

module.exports = router;
