// bring in dependencies
const mongoose = require("mongoose");
// create a schema

const driverSchema = new mongoose.Schema({
  name: String,
  age: Number,
  cars: [
    {
      ref: "Car",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

// create a model
const Driver = mongoose.model("Driver", driverSchema);

// export the model
module.exports = Driver;
