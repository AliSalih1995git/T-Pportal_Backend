const {
  createStudent,
  getAllStudent,
  createBatches,
  addResult,
  getAllBatches,
  getSingleStudent,
} = require("../controllers/teacherController");

const router = require("express").Router();

router.post("/createStudent", createStudent);
router.get("/getAllStudent", getAllStudent);
router.get("/getSingleStudent/:id", getSingleStudent);

router.post("/createBatches", createBatches);
router.get("/getAllBatches", getAllBatches);

router.post("/addResult", addResult);

module.exports = router;
