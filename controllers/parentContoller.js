const Batch = require("../models/batch");
const Result = require("../models/result");
const Student = require("../models/student");

exports.getAllStudentData = async (req, res) => {
  try {
    const results = await Result.find().populate("student batch");

    const populatedResults = await Promise.all(
      results.map(async (result) => {
        const student = await Student.findById(result.student._id);
        const batch = await Batch.findById(result.batch._id);

        return {
          name: student.name,
          parent: student.parent,
          batches: batch.name,
          marks: result.marks,
        };
      })
    );
    res.status(200).json(populatedResults);
  } catch (error) {
    console.log("Error fetching results:", error);
  }
};

exports.getResultsByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const results = await Result.find({ student: studentId }).populate(
      "student batch"
    );
    res.status(200).json(results);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the results." });
  }
};
