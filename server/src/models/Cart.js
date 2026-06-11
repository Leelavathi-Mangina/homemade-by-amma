const mongoose = require("mongoose");

const cartItemSchema =
  new mongoose.Schema({
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  });

const cartSchema =
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
      },

      items: [cartItemSchema],

      expiresAt: {
        type: Date,
        default: () =>
          new Date(
            Date.now() +
              7 * 24 * 60 * 60 * 1000
          ),
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Cart",
    cartSchema
  );