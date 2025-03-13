import ProductModel from "../models/products.model.js";
import { v4 as uuidv4 } from "uuid";

export default class ProductService {
  static async getProducts() {
    return await ProductModel.getAll();
  }

  static async getProduct(id) {
    const product = await ProductModel.getById(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  static async createProduct(body) {
    const product = {
      ...body,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    };
    return await ProductModel.create(product);
  }

  static async updateProduct(id, body) {
    const product = await ProductModel.getById(id);
    if (!product) {
      throw new Error("Product not found");
    }
    const updatedProduct = {
      ...body,
      id,
      updatedAt: new Date().toISOString(),
    };
    return await ProductModel.update(id, updatedProduct);
  }

  static async deleteProduct(id) {
    return await ProductModel.delete(id);
  }
}
