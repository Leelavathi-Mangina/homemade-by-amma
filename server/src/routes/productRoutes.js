const express = require("express");

const {
  createProduct,
  getProducts,
  getFeaturedProducts,
  getProductBySlug,
  updateFeaturedStatus,
} = require("../controllers/productController");

const router = express.Router();

router.post("/", createProduct);

router.get("/featured", getFeaturedProducts);

router.get("/", getProducts);

router.patch("/:slug/featured", updateFeaturedStatus);

router.get("/:slug", getProductBySlug);

module.exports = router;
