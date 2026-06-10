const Category = require("../models/Category");
const Product = require("../models/Product");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

const createProduct = asyncHandler(
  async (req, res) => {
    const {
      productId,
      name,
      slug,
      category,
      description,
      price,
    } = req.body;

    if (
      !productId ||
      !name ||
      !slug ||
      !category ||
      !description ||
      !price
    ) {
      return res.status(400).json(
        new ApiResponse(
          false,
          "All required fields must be provided"
        )
      );
    }

    const categoryExists =
      await Category.findById(category);

    if (!categoryExists) {
      return res.status(404).json(
        new ApiResponse(
          false,
          "Category not found"
        )
      );
    }

    const existingProductId =
      await Product.findOne({ productId });

    if (existingProductId) {
      return res.status(409).json(
        new ApiResponse(
          false,
          "Product ID already exists"
        )
      );
    }

    const existingSlug =
      await Product.findOne({ slug });

    if (existingSlug) {
      return res.status(409).json(
        new ApiResponse(
          false,
          "Product slug already exists"
        )
      );
    }

    const product =
      await Product.create(req.body);

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


