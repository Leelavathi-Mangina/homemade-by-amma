const Category = require("../models/Category");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

const createCategory = asyncHandler(
  async (req, res) => {
    const {
      categoryId,
      name,
      slug,
      description,
      image,
    } = req.body;

    if (
      !categoryId ||
      !name ||
      !slug ||
      !description
    ) {
      return res.status(400).json(
        new ApiResponse(
          false,
          "All required fields must be provided"
        )
      );
    }

    const category = await Category.create({
      categoryId,
      name,
      slug,
      description,
      image,
    });

    res.status(201).json(
      new ApiResponse(
        true,
        "Category created successfully",
        category
      )
    );
  }
);

const getCategories = asyncHandler(
  async (req, res) => {
    const categories = await Category.find();

    res.status(200).json(
      new ApiResponse(
        true,
        "Categories fetched successfully",
        categories
      )
    );
  }
);

module.exports = {
  createCategory,
  getCategories,
};