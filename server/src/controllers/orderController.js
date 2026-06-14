const Order = require("../models/Order");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");
const generateOrderId = require("../utils/generateOrderId");
const isValidOrderTransition = require("../utils/orderStatusValidator");
const isValidPaymentTransition = require("../utils/paymentStatusValidator");

const API_MESSAGES = require("../constants/apiMessages");
const ORDER_STATUS = require("../constants/orderStatus");
const PAYMENT_STATUS = require("../constants/paymentStatus");


const placeOrder = asyncHandler(async (req, res) => {
  const { deliveryAddress, phone, orderNotes, preferredDeliveryDate } =
    req.body;

  const cart = await Cart.findOne({
    user: req.user._id,
  }).populate("items.product");

  if (!cart || cart.items.length === 0) {
    return res.status(400).json(new ApiResponse(false, "Cart is empty"));
  }

  let totalAmount = 0;

  const orderItems = cart.items.map((item) => {
    totalAmount += item.product.price * item.quantity;

    return {
      product: item.product._id,
      productName: item.product.name,
      unit: item.product.unit,
      quantity: item.quantity,
      price: item.product.price,
    };
  });

  const orderId = await generateOrderId();

  const order = await Order.create({
    orderId,
    user: req.user._id,
    items: orderItems,
    totalAmount,
    deliveryAddress,
    phone,
    orderNotes,
    preferredDeliveryDate,
  });

  cart.items = [];
  await cart.save();

  res
    .status(201)
    .json(new ApiResponse(true, "Order placed successfully", order));
});

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({
    user: req.user._id,
  })
    .select("-_id orderId totalAmount status paymentStatus createdAt")
    .sort({ createdAt: -1 });

  res
    .status(200)
    .json(new ApiResponse(true, "Orders fetched successfully", orders));
});

const getOrderById = asyncHandler(async (req, res) => {
  const { orderId } = req.params;

  const order = await Order.findOne({
    orderId,
    user: req.user._id,
  }).select("-_id -__v -items._id");

  if (!order) {
    return res.status(404).json(new ApiResponse(false, "Order not found"));
  }

  res
    .status(200)
    .json(new ApiResponse(true, "Order fetched successfully", order));
});

const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find()
  .populate("user", "name email phone -_id")
  .select("-_id -__v -items._id -items.product -updatedAt")
  .sort({ createdAt: -1 });

  res
    .status(200)
    .json(new ApiResponse(true, "Orders fetched successfully", orders));
});

const getSingleOrder = asyncHandler(async (req, res) => {
  const order = await Order.findOne({
    orderId: req.params.orderId,
  })
    .populate("user", "name email phone -_id")
    .select("-_id -__v -items._id -items.product -updatedAt");

  if (!order) {
    return res
      .status(404)
      .json(new ApiResponse(false, "Order not found"));
  }

  res.status(200).json(
    new ApiResponse(
      true,
      "Order fetched successfully",
      order
    )
  );
});

const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  if (!Object.values(ORDER_STATUS).includes(status)) {
    return res
      .status(400)
      .json(new ApiResponse(false, "Invalid order status"));
  }

  const order = await Order.findOne({
    orderId: req.params.orderId,
  });

  if (!order) {
    return res
      .status(404)
      .json(new ApiResponse(false, "Order not found"));
  }

  if (!isValidOrderTransition(order.status, status)) {
    return res
      .status(400)
      .json(
        new ApiResponse(
          false,
          `Cannot change status from ${order.status} to ${status}`
        )
      );
  }

  order.status = status;

  await order.save();

  res.status(200).json(
    new ApiResponse(
      true,
      "Order status updated successfully",
      {
        orderId: order.orderId,
        status: order.status,
      }
    )
  );
});

const updatePaymentStatus = asyncHandler(async (req, res) => {
  const { paymentStatus } = req.body;

  if (!Object.values(PAYMENT_STATUS).includes(paymentStatus)) {
    return res
      .status(400)
      .json(new ApiResponse(false, "Invalid payment status"));
  }

  const order = await Order.findOne({
    orderId: req.params.orderId,
  });

  if (!order) {
    return res
      .status(404)
      .json(new ApiResponse(false, "Order not found"));
  }

  if (
    !isValidPaymentTransition(
      order.paymentStatus,
      paymentStatus
    )
  ) {
    return res.status(400).json(
      new ApiResponse(
        false,
        `Cannot change payment status from ${order.paymentStatus} to ${paymentStatus}`
      )
    );
  }

  order.paymentStatus = paymentStatus;

  await order.save();

  res.status(200).json(
    new ApiResponse(
      true,
      "Payment status updated successfully",
      {
        orderId: order.orderId,
        paymentStatus: order.paymentStatus,
      }
    )
  );
});

module.exports = {
  placeOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  getSingleOrder,
  updateOrderStatus,
  updatePaymentStatus,
};

  