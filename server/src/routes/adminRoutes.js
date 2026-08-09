const express = require("express");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const ApiResponse = require("../utils/ApiResponse");

const {
  getAllOrders,
  getSingleOrder,
  updateOrderStatus,
  updatePaymentStatus,
} = require("../controllers/orderController");

const router = express.Router();

router.get(
  "/dashboard",
  protect,
  adminOnly,
  (req, res) => {
    res.status(200).json(
      new ApiResponse(
        true,
        "Welcome Admin",
        req.user
      )
    );
  }
);

router.get(
  "/orders",
  protect,
  adminOnly,
  getAllOrders
);

router.get(
  "/orders/:orderId",
  protect,
  adminOnly,
  getSingleOrder
);

router.patch(
  "/orders/:orderId/status",
  protect,
  adminOnly,
  updateOrderStatus
);

router.patch(
  "/orders/:orderId/payment-status",
  protect,
  adminOnly,
  updatePaymentStatus
);

module.exports = router;