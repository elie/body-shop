// bring in dependencies
const mongoose = require("mongoose");
// create a schema

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  driver: {
    ref: "Driver",
    type: mongoose.Schema.Types.ObjectId
  }
});

// create a model
const Car = mongoose.model("Car", carSchema);

// export the model
module.exports = Car;
