const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

require("dotenv").config();

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const existingAdmin = await User.findOne({
      email: "admin@homemadebyamma.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists.");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(
      "Admin@123",
      10
    );

    await User.create({
      name: "Leelavathi Admin",
      email: "admin@homemadebyamma.com",
      phone: "9999999999",
      password: hashedPassword,
      role: "admin",
    });

    console.log("Admin created successfully.");

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
}

createAdmin();