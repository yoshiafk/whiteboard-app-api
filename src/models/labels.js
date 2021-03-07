const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = function LabelsModel() {
  const labelsSchema = new Schema({
    labelName: { type: String },
    createdAt: { type: Date, default: Date.now },
    udpatedAt: { type: Date, default: Date.now },
  });

  return mongoose.model("Label", labelsSchema);
};
