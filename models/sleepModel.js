const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sleepSchema = new Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    userId: { type: String, required: true },
    sleepStruggle: {
      min: { type: Number, enum: [0, 2, 8] },
      max: { type: Number, enum: [2, 8, -1] },
    },
    sleepTime: Date,
    wakeTime: Date,
    sleepDuration: { type: Number, min: 0, max: 23 },
    dataCollectionStage: { type: Number, min: 0, max: 3 },
    sleepQuality: { type: Number, min: 0, max: 100 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null },
  },
  {
    timestamps: true,
    versionKey: false,
  },
  {
    collection: "sleep",
  }
);

module.exports = mongoose.model("Sleep", sleepSchema);
