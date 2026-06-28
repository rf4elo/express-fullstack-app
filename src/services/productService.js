import { ProductModel } from "../models/productModel.js";
import { products_db } from "../config/database.js";


export async function GetAllProducts() {
    return products_db;
}

export async function GetOneProduct(id) {
    const product = await products_db.find(p => p.id == id);
    if(!product) throw new Error("Product not found.");
    return product;
}

export async function CreateProduct(product) {
    if(!product) throw new Error("Invalid product model.");
    products_db.push(product);
    return product;
}
