const express = require("express");

const {
  protect,
} = require("../middleware/authMiddleware");

const {
  addToCart,
  getCart,
  updateCartItem,
} = require("../controllers/cartController");

const router = express.Router();

router.post(
  "/add",
  protect,
  addToCart
);

router.get(
  "/",
  protect,
  getCart
);

router.put(
  "/update",
  protect,
  updateCartItem
);

module.exports = router;