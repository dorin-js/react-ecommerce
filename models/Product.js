const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: {},
    colors: { type: Array },
    price: { type: String, required: true },
    category: { type: Array },
    description: { type: String, required: true },
    company: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
