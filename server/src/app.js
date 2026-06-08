const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const categoryRoutes = require("./routes/categoryRoutes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");


const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Homemade by Amma API is running",
  });
});

app.use(
  "/api/categories",
  categoryRoutes
);

app.use(notFound);
app.use(errorHandler);

module.exports = app;