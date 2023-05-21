const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const resultScheema = new mongoose.Schema({
  student: {
    type: ObjectId,
    ref: "Student",
    required: true,
  },
  batch: {
    type: ObjectId,
    ref: "Batch",
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Result", resultScheema);
