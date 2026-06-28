import { ProductModel } from "../models/productModel";
import { products_db } from "../config/database";



export async function GetAllProducts() {
    return products_db;
}

export async function GetOneProduct(id) {
    const product = products_db.find(p => p.id == id);
    if(!product) throw new Error("Product not found.");
    return product;
}

