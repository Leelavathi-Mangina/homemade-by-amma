const ApiResponse = require("../utils/ApiResponse");

const getProfile = (req, res) => {
  res.status(200).json(
    new ApiResponse(
      true,
      "Profile fetched successfully",
      req.user
    )
  );
};

module.exports = {
  getProfile,
};