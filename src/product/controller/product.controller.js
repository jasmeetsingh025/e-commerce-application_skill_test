import {
  addProductRepo,
  deleteProductRepo,
  getAllProductRepo,
  updateProductRepo,
} from "../model/product.repository.js";

export const addProduct = async (req, res, next) => {
  try {
    const products = req.body;
    const product = await addProductRepo(products);
    res.status(200).json({ data: product });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    // Implement delete product logic here
    const isDeleted = await deleteProductRepo(productId);
    if (!isDeleted)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ data: { message: "Product deleted" } });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const numbers = parseInt(req.params.numbers);
    const isUpdated = await updateProductRepo(productId, numbers);
    if (!isUpdated)
      return res.status(404).json({ message: "Product not found" });
    res.status(200).json({
      data: {
        product: {
          id: isUpdated.id,
          name: isUpdated.name,
          quantity: isUpdated.quantity,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getAllProduct = async (req, res, next) => {
  try {
    const products = await getAllProductRepo();
    res.status(200).json({ data: { products: products } });
  } catch (error) {
    next(error);
  }
};
