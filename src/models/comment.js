const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = function commentModel() {
  const labelsSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "users" },
    cardId: { type: Schema.Types.ObjectId, ref: "cards" },
    description: { type: String },
    createdAt: { type: Date, default: Date.now },
    udpatedAt: { type: Date, default: Date.now },
  });

  return mongoose.model("comments", labelsSchema);
};
