function generateOrderId(orderCount) {
  return `ORD-${String(orderCount + 1).padStart(6, "0")}`;
}

module.exports = generateOrderId;