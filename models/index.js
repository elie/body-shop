const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/rithm-body-shop");

// module.exports  = {
// Driver: mongoose.model
// }

module.exports.Driver = require("./driver");
