const PAYMENT_STATUS = require("../constants/paymentStatus");

const validTransitions = {
  [PAYMENT_STATUS.PENDING]: [
    PAYMENT_STATUS.PAID,
    PAYMENT_STATUS.FAILED,
  ],

  [PAYMENT_STATUS.PAID]: [
    PAYMENT_STATUS.REFUNDED,
  ],

  [PAYMENT_STATUS.FAILED]: [],

  [PAYMENT_STATUS.REFUNDED]: [],
};

function isValidPaymentTransition(currentStatus, newStatus) {
  return validTransitions[currentStatus]?.includes(newStatus);
}

module.exports = isValidPaymentTransition;