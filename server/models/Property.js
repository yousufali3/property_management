const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  propertyName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
