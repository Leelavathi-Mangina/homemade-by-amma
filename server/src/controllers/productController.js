const Category = require("../models/Category");
const Product = require("../models/Product");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");

const createProduct = asyncHandler(async (req, res) => {
  const {
    productId,
    name,
    slug,
    category,
    shortDescription,
    description,
    shelfLife,
    price,
  } = req.body;

  if (
    !productId ||
    !name ||
    !slug ||
    !category ||
    !shortDescription ||
    !description ||
    !shelfLife ||
    !price
  ) {
    return res
      .status(400)
      .json(new ApiResponse(false, "All required fields must be provided"));
  }

  const categoryExists = await Category.findById(category);

  if (!categoryExists) {
    return res.status(404).json(new ApiResponse(false, "Category not found"));
  }

  const existingProductId = await Product.findOne({ productId });

  if (existingProductId) {
    return res
      .status(409)
      .json(new ApiResponse(false, "Product ID already exists"));
  }

  const existingSlug = await Product.findOne({ slug });

  if (existingSlug) {
    return res
      .status(409)
      .json(new ApiResponse(false, "Product slug already exists"));
  }

  const product = await Product.create(req.body);

  res
    .status(201)
    .json(new ApiResponse(true, "Product created successfully", product));
});

const updateProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  const {
    name,
    slug,
    category,
    shortDescription,
    description,
    ingredients,
    shelfLife,
    madeToOrder,
    price,
    unit,
    approximatePiecesPerKg,
    minOrderQuantity,
    estimatedDeliveryDays,
    images,
    isAvailable,
    customizable,
    featured,
  } = req.body;

  const product = await Product.findOne({ productId });

  if (!product) {
    return res
      .status(404)
      .json(new ApiResponse(false, "Product not found"));
  }

  if (category) {
    const categoryExists = await Category.findById(category);

    if (!categoryExists) {
      return res
        .status(404)
        .json(new ApiResponse(false, "Category not found"));
    }
  }

  if (slug && slug !== product.slug) {
    const existingSlug = await Product.findOne({
      slug,
      _id: { $ne: product._id },
    });

    if (existingSlug) {
      return res
        .status(409)
        .json(new ApiResponse(false, "Product slug already exists"));
    }
  }

  product.name = name ?? product.name;
  product.slug = slug ?? product.slug;
  product.category = category ?? product.category;
  product.shortDescription =
    shortDescription ?? product.shortDescription;
  product.description = description ?? product.description;
  product.ingredients = ingredients ?? product.ingredients;
  product.shelfLife = shelfLife ?? product.shelfLife;
  product.madeToOrder = madeToOrder ?? product.madeToOrder;
  product.price = price ?? product.price;
  product.unit = unit ?? product.unit;
  product.approximatePiecesPerKg =
    approximatePiecesPerKg ?? product.approximatePiecesPerKg;
  product.minOrderQuantity =
    minOrderQuantity ?? product.minOrderQuantity;
  product.estimatedDeliveryDays =
    estimatedDeliveryDays ?? product.estimatedDeliveryDays;
  product.images = images ?? product.images;
  product.isAvailable = isAvailable ?? product.isAvailable;
  product.customizable = customizable ?? product.customizable;
  product.featured = featured ?? product.featured;

  await product.save();

  res.status(200).json(
    new ApiResponse(
      true,
      "Product updated successfully",
      product
    )
  );
});

const updateProductAvailability = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const { isAvailable } = req.body;

  if (typeof isAvailable !== "boolean") {
    return res
      .status(400)
      .json(
        new ApiResponse(
          false,
          "isAvailable must be a boolean"
        )
      );
  }

  const product = await Product.findOne({ slug });

  if (!product) {
    return res
      .status(404)
      .json(
        new ApiResponse(
          false,
          "Product not found"
        )
      );
  }

  product.isAvailable = isAvailable;

  await product.save();

  res.status(200).json(
    new ApiResponse(
      true,
      "Product availability updated successfully",
      {
        productId: product.productId,
        name: product.name,
        isAvailable: product.isAvailable,
      }
    )
  );
});

const getProducts = asyncHandler(async (req, res) => {
  const { category, search } = req.query;

  const filter = {};

  if (category) {
    const categoryDoc = await Category.findOne({
      slug: category,
    });

    if (categoryDoc) {
      filter.category = categoryDoc._id;
    } else {
      return res
        .status(200)
        .json(new ApiResponse(true, "Products fetched successfully", []));
    }
  }

  if (search) {
    filter.name = {
      $regex: search,
      $options: "i",
    };
  }

  const products = await Product.find(filter).populate("category");

  res
    .status(200)
    .json(new ApiResponse(true, "Products fetched successfully", products));
});

const getFeaturedProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({
    featured: true,
    isAvailable: true,
  }).populate("category");

  res.status(200).json(
    new ApiResponse(
      true,
      "Featured products fetched successfully",
      products
    )
  );
});

const updateFeaturedStatus = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const { featured } = req.body;

  const product = await Product.findOne({ slug });

  if (!product) {
    return res.status(404).json(
      new ApiResponse(false, "Product not found")
    );
  }

  product.featured = featured;

  await product.save();

  res.status(200).json(
    new ApiResponse(
      true,
      "Featured status updated successfully",
      product
    )
  );
});


const getProductBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  const product = await Product.findOne({ slug }).populate("category");

  if (!product) {
    return res.status(404).json(
      new ApiResponse(
        false,
        "Product not found"
      )
    );
  }

  res.status(200).json(
    new ApiResponse(
      true,
      "Product fetched successfully",
      product
    )
  );
});


module.exports = {
  createProduct,
  updateProduct,
  updateProductAvailability,
  getProducts,
  getFeaturedProducts,
  getProductBySlug,
  updateFeaturedStatus,
};

