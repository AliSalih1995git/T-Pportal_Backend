const Batch = require("../models/batch");
const Result = require("../models/result");
const Student = require("../models/student");

//get all parent Data
exports.getAllParentData = async (req, res) => {
  try {
    const results = await Result.find().populate("student batch");

    const parentResults = await Promise.all(
      results.map(async (result) => {
        const student = await Student.findById(result.student._id);
        return {
          parent: student.parent,
        };
      })
    );
    res.status(200).json(parentResults);
  } catch (error) {
    console.log(error);
  }
};

//get All student Data
exports.getAllStudentData = async (req, res) => {
  try {
    // console.log(req.query, "hhhh");
    const { parent } = req.query;
    const results = await Result.find().populate("student").populate("batch");

    const filteredResults = results.filter((result) => {
      if (result.student.parent === parent) {
        return result;
      }
    });
    // console.log(filteredResults, "filteredResults");
    res.status(200).json(filteredResults);
  } catch (error) {
    console.log(error);
  }
};
