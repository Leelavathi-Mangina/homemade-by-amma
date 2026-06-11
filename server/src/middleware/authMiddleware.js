const jwt = require("jsonwebtoken");

const User = require("../models/User");

const ApiResponse = require("../utils/ApiResponse");

const asyncHandler = require("../utils/asyncHandler");

const protect = asyncHandler(
  async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json(
        new ApiResponse(
          false,
          "Not authorized"
        )
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    const user = await User.findById(
      decoded.id
    ).select("-password");

    if (!user) {
      return res.status(401).json(
        new ApiResponse(
          false,
          "User not found"
        )
      );
    }

    req.user = user;

    next();
  }
);


const adminOnly = (
  req,
  res,
  next
) => {
  if (req.user.role !== "admin") {
    return res.status(403).json(
      new ApiResponse(
        false,
        "Access denied. Admin only."
      )
    );
  }

  next();
};



module.exports = {
  protect,
  adminOnly,
};