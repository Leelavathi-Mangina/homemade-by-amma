const Order = require("../models/Order");

async function generateOrderId() {
  const lastOrder = await Order.findOne()
    .sort({ createdAt: -1 });

  if (!lastOrder) {
    return "ORD-000001";
  }

  const lastNumber = parseInt(
    lastOrder.orderId.split("-")[1]
  );

  return `ORD-${String(lastNumber + 1).padStart(6, "0")}`;
}

module.exports = generateOrderId;