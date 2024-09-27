//? Third party imports
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

//? Local imports
import productRouter from "./src/product/routes/product.routes.js";
export const app = express();

//? Middleware to handle API requests
app.use(cors());
app.use(express.json());
app.use(cookieParser());
//? For all request related to product will be routed to product router.
app.use("/products", productRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    message: err.message || "An unexpected error occurred",
    statusCode: err.statusCode || 500,
  });
});
