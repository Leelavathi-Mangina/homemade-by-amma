const express = require("express");

const {
  protect,
} = require("../middleware/authMiddleware");

const {
  addToCart,
} = require("../controllers/cartController");

const router = express.Router();

router.post(
  "/add",
  protect,
  addToCart
);

module.exports = router;