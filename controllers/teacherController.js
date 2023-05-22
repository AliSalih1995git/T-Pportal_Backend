const Batch = require("../models/batch");
const Result = require("../models/result");
const Student = require("../models/student");

//Add student
exports.createStudent = async (req, res) => {
  try {
    const { name, parent, batches } = req.body;
    const student = new Student({
      name,
      parent,
      batches,
    });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the student." });
  }
};

//get All student
exports.getAllStudent = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the student." });
  }
};

//get single student
exports.getSingleStudent = async (req, res) => {
  try {
    const student = await Student.findOne({ _id: req.params.id });
    res.status(200).json(student);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the student." });
  }
};

//create batches
exports.createBatches = async (req, res) => {
  try {
    const { name } = req.body;
    const batch = new Batch({ name });
    await batch.save();
    res.status(201).json(batch);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the batch." });
  }
};

exports.getAllBatches = async (req, res) => {
  try {
    const batches = await Batch.find();
    res.status(200).json(batches);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the Batches." });
  }
};

//add result
exports.addResult = async (req, res) => {
  try {
    const { studentId, batchId, marks } = req.body;
    console.log(studentId, batchId, marks);
    const result = new Result({
      student: studentId,
      batch: batchId,
      marks,
    });
    await result.save();
    res.status(201).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while adding the result." });
  }
};
