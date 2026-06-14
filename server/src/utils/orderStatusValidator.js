const ORDER_STATUS = require("../constants/orderStatus");

const validTransitions = {
  [ORDER_STATUS.PENDING]: [
    ORDER_STATUS.CONFIRMED,
    ORDER_STATUS.CANCELLED,
  ],

  [ORDER_STATUS.CONFIRMED]: [
    ORDER_STATUS.PREPARING,
    ORDER_STATUS.CANCELLED,
  ],

  [ORDER_STATUS.PREPARING]: [
    ORDER_STATUS.READY,
    ORDER_STATUS.CANCELLED,
  ],

  [ORDER_STATUS.READY]: [
    ORDER_STATUS.OUT_FOR_DELIVERY,
  ],

  [ORDER_STATUS.OUT_FOR_DELIVERY]: [
    ORDER_STATUS.DELIVERED,
  ],

  [ORDER_STATUS.DELIVERED]: [],

  [ORDER_STATUS.CANCELLED]: [],
};

function isValidOrderTransition(currentStatus, newStatus) {
  return validTransitions[currentStatus]?.includes(newStatus);
}

module.exports = isValidOrderTransition;