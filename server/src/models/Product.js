const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    // NEW
    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    // NEW
    ingredients: [
      {
        type: String,
        trim: true,
      },
    ],

    // NEW
    shelfLife: {
      type: String,
      required: true,
      trim: true,
    },

    // NEW
    madeToOrder: {
      type: Boolean,
      default: true,
    },

    price: {
      type: Number,
      required: true,
      min: 1,
    },

    unit: {
      type: String,
      default: "kg",
    },

    approximatePiecesPerKg: {
      type: Number,
    },

    minOrderQuantity: {
      type: Number,
      default: 1,
      min: 1,
    },

    estimatedDeliveryDays: {
      type: Number,
      default: 3,
      min: 1,
    },

    images: [
      {
        type: String,
      },
    ],

    isAvailable: {
      type: Boolean,
      default: true,
    },

    customizable: {
      type: Boolean,
      default: false,
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Product", productSchema);
