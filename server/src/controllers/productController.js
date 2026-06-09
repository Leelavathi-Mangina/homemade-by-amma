const Product = require("../models/Product");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

const createProduct = asyncHandler(
  async (req, res) => {
    const product = await Product.create(req.body);

    res.status(201).json(
      new ApiResponse(
        true,
        "Product created successfully",
        product
      )
    );
  }
);

const getProducts = asyncHandler(
  async (req, res) => {
    const products = await Product.find()
      .populate("category");

    res.status(200).json(
      new ApiResponse(
        true,
        "Products fetched successfully",
        products
      )
    );
  }
);

module.exports = {
  createProduct,
  getProducts,
};