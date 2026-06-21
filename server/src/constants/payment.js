const PAYMENT = {
  // Reuse the existing Razorpay order if it was created within the last 30 minutes.
  RAZORPAY_ORDER_EXPIRY_TIME_MS: 30 * 60 * 1000,
};

module.exports = PAYMENT;
