const express = require("express");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const ApiResponse =
  require("../utils/ApiResponse");

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

module.exports = router;