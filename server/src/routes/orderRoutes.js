const express = require("express");

const router = express.Router();

const {
  placeOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  getSingleOrder,
  updateOrderStatus,
  updatePaymentStatus,
} = require("../controllers/orderController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

router.post(
  "/",
  protect,
  placeOrder
);

router.get(
  "/my-orders",
  protect,
  getMyOrders
);

router.get(
  "/:orderId",
  protect,
  getOrderById
);

router.get(
  "/admin",
  protect,
  adminOnly,
  getAllOrders
);

router.get(
  "/admin/:orderId",
  protect,
  adminOnly,
  getSingleOrder
);

router.patch(
  "/admin/:orderId/status",
  protect,
  adminOnly,
  updateOrderStatus
);

router.patch(
  "/admin/:orderId/payment-status",
  protect,
  adminOnly,
  updatePaymentStatus
);

module.exports = router;