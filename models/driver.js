// bring in dependencies
const mongoose = require("mongoose");
// create a schema

const driverSchema = new mongoose.Schema({
  name: String
});

// create a model
const Driver = mongoose.model("Driver", driverSchema);

// export the model
module.exports = Driver;
