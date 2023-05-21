const mongoose = require("mongoose");

const batchScheema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Batch", batchScheema);
