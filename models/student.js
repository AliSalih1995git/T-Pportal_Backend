const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const studentScheema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  parent: {
    type: String,
    require: true,
  },
  batches: [
    {
      type: ObjectId,
      ref: "Batch",
      required: true,
    },
  ],
});

module.exports = mongoose.model("Student", studentScheema);
