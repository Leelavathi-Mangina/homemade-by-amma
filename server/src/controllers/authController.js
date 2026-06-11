const bcrypt = require("bcryptjs");

const User = require("../models/User");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(
  async (req, res) => {
    const {
      name,
      email,
      phone,
      password,
    } = req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !password
    ) {
      return res.status(400).json(
        new ApiResponse(
          false,
          "All fields are required"
        )
      );
    }

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json(
        new ApiResponse(
          false,
          "User already exists"
        )
      );
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    const token =
      generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge:
        7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json(
      new ApiResponse(
        true,
        "User registered successfully",
        {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        }
      )
    );
  }
);


const loginUser = asyncHandler(
  async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json(
        new ApiResponse(
          false,
          "Email and password are required"
        )
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json(
        new ApiResponse(
          false,
          "Invalid credentials"
        )
      );
    }

    const isPasswordMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isPasswordMatch) {
      return res.status(401).json(
        new ApiResponse(
          false,
          "Invalid credentials"
        )
      );
    }

    const token =
      generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge:
        7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json(
      new ApiResponse(
        true,
        "Login successful",
        {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        }
      )
    );
  }
);


module.exports = {
  registerUser,
  loginUser,
};