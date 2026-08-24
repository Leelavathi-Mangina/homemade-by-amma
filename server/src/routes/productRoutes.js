const express = require("express");
const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  createProduct,
  updateProduct,
  getProducts,
  getFeaturedProducts,
  getProductBySlug,
  updateFeaturedStatus,
  updateProductAvailability,
  uploadProductImage,
  deleteProductImage,
  replaceProductImage,
} = require("../controllers/productController");

const router = express.Router();

router.post("/", createProduct);

router.get("/featured", getFeaturedProducts);

router.get("/", getProducts);

/*
 * Admin product management
 *
 * Update complete product using productId.
 * Example:
 * PATCH /api/products/002
 */
router.patch("/:productId", updateProduct);

/*
 * Update featured status using slug.
 * Example:
 * PATCH /api/products/test-kaju-katli/featured
 */
router.patch("/:slug/featured", updateFeaturedStatus);

/*
 * Update availability using slug.
 * Example:
 * PATCH /api/products/test-kaju-katli/availability
 */
router.patch("/:slug/availability", updateProductAvailability);

router.post(
  "/:productId/images",
  protect,
  adminOnly,
  upload.single("image"),
  uploadProductImage
);

router.delete(
  "/:productId/images",
  protect,
  adminOnly,
  deleteProductImage
);

router.patch(
  "/:productId/images",
  protect,
  adminOnly,
  upload.single("image"),
  replaceProductImage
);

router.get("/:slug", getProductBySlug);

module.exports = router;