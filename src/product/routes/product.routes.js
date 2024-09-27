import express from "express";
import * as productController from "../controller/product.controller.js";

const router = express.Router();

//# Post request
router.post("/create", (req, res, next) => {
  productController.addProduct(req, res, next);
});
//# Delete request
router.route("/:id").delete((req, res, next) => {
  productController.deleteProduct(req, res, next);
});
//# Update request
router.route("/:id/update_quantity/:numbers").put((req, res, next) => {
  productController.updateProduct(req, res, next);
});
//# Get request for localhost/api/product
router.route("/").get((req, res, next) => {
  productController.getAllProduct(req, res, next);
});

export default router;
