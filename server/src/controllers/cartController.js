const Cart = require("../models/Cart");
const Product = require("../models/Product");

const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

const addToCart = asyncHandler(
  async (req, res) => {
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json(
        new ApiResponse(
          false,
          "Product ID and quantity are required"
        )
      );
    }

    const product =
      await Product.findById(productId);

    if (!product) {
      return res.status(404).json(
        new ApiResponse(
          false,
          "Product not found"
        )
      );
    }

    let cart =
      await Cart.findOne({
        user: req.user._id,
      });

    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        items: [],
      });
    }

    const existingItem =
      cart.items.find(
        (item) =>
          item.product.toString() ===
          productId
      );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity,
      });
    }

    await cart.save();

    res.status(200).json(
      new ApiResponse(
        true,
        "Product added to cart",
        cart
      )
    );
  }
);


const getCart = asyncHandler(
  async (req, res) => {
    const cart = await Cart.findOne({
      user: req.user._id,
    }).populate("items.product");

    res.status(200).json(
      new ApiResponse(
        true,
        "Cart fetched successfully",
        cart
      )
    );
  }
);

module.exports = {
  addToCart,
  getCart,
};