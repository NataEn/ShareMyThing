const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    imgUrl: String,
    images: [Buffer],
    // lastUsed: { type: Date },
    publishedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    inUseBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
