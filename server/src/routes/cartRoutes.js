const express = require("express");

const {
  protect,
} = require("../middleware/authMiddleware");

const {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem,
  clearCart,
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

router.delete(
  "/remove/:productId",
  protect,
  removeCartItem
);

router.delete(
  "/clear",
  protect,
  clearCart
);

module.exports = router;