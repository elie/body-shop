const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/rithm-body-shop", {
  useMongoClient: true
});

// mongoose.connect('mongodb://localhost/myapp', {
//   useMongoClient: true,
//   /* other options */
// })

// module.exports  = {
// Driver: mongoose.model
// }

module.exports.Driver = require("./driver");
module.exports.Car = require("./car");
