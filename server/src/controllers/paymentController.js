const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const Order = require("../models/Order");

const razorpay = require("../config/razorpay");

const PAYMENT_STATUS = require("../constants/paymentStatus");

const PAYMENT = require("../constants/payment");

const crypto = require("crypto");

const createRazorpayOrder = asyncHandler(async (req, res) => {
  const { orderId } = req.body;

  if (!orderId) {
    return res.status(400).json(new ApiResponse(false, "Order ID is required"));
  }

  const order = await Order.findOne({ orderId });

  if (!order) {
    return res.status(404).json(new ApiResponse(false, "Order not found"));
  }

  if (order.paymentStatus === PAYMENT_STATUS.PAID) {
    return res
      .status(400)
      .json(new ApiResponse(false, "Order is already paid"));
  }

  if (order.razorpayOrderId && order.razorpayOrderCreatedAt) {
    const orderAge =
      Date.now() - new Date(order.razorpayOrderCreatedAt).getTime();

    if (orderAge < PAYMENT.RAZORPAY_ORDER_EXPIRY_TIME_MS) {
      return res.status(200).json(
        new ApiResponse(true, "Existing Razorpay order found", {
          orderId: order.orderId,
          razorpayOrderId: order.razorpayOrderId,
          amount: order.totalAmount * 100,
          currency: "INR",
        }),
      );
    }
  }

  const options = {
    amount: order.totalAmount * 100,
    currency: "INR",
    receipt: order.orderId,
  };

  const razorpayOrder = await razorpay.orders.create(options);

  if (!razorpayOrder) {
    return res
      .status(500)
      .json(new ApiResponse(false, "Failed to create Razorpay order"));
  }

  order.razorpayOrderId = razorpayOrder.id;

  order.razorpayOrderCreatedAt = new Date();

  await order.save();

  return res.status(201).json(
    new ApiResponse(true, "Razorpay order created successfully", {
      orderId: order.orderId,
      razorpayOrderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
    }),
  );
});

const verifyPayment = asyncHandler(async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res
      .status(400)
      .json(new ApiResponse(false, "Payment verification data is required"));
  }

  const order = await Order.findOne({
    razorpayOrderId: razorpay_order_id,
  });

  if (!order) {
    return res.status(404).json(new ApiResponse(false, "Order not found"));
  }

  const generatedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (generatedSignature !== razorpay_signature) {
    return res
      .status(400)
      .json(new ApiResponse(false, "Invalid payment signature"));
  }

  order.paymentStatus = PAYMENT_STATUS.PAID;

  order.razorpayPaymentId = razorpay_payment_id;

  order.razorpaySignature = razorpay_signature;

  await order.save();

  return res.status(200).json(
    new ApiResponse(true, "Payment verified successfully", {
      orderId: order.orderId,
      paymentStatus: order.paymentStatus,
      razorpayPaymentId: order.razorpayPaymentId,
    }),
  );
});

module.exports = {
  createRazorpayOrder,
  verifyPayment,
};
