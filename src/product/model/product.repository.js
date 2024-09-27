import productSchema from "./product.schema.js";

export const addProductRepo = async (products) => {
  //   const newProduct = new ProductModel(products);
  const product = new productSchema(products);
  const result = await product.save();
  if (result) {
    return { product: { name: result.name, quantity: result.quantity } };
  }
  return false;
};

export const deleteProductRepo = async (productId) => {
  const result = await productSchema.findByIdAndDelete(productId);
  return result;
};

export const updateProductRepo = async (productId, quantity) => {
  const result = await productSchema.findByIdAndUpdate(
    productId,
    { quantity },
    { new: true }
  );
  return result;
};

export const getAllProductRepo = async () => {
  const products = await productSchema.find({}).select("-__v");
  return products;
};
