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

export async function UpdateProduct(id, updatedProduct) {
    const productIndex = await products_db.findIndex(p => p.id == id);

    if(productIndex == -1) throw new Error("Product not found.");

    if(!updatedProduct) throw new Error("Invalid product model.");

    products_db[productIndex] = {
        ...products_db[productIndex],
        ...updatedProduct
    };

    return products_db[productIndex];
}

export async function DeleteProduct(id) {
    const deletedProduct = await products_db.find(p => p.id == id);
    const productIndex = products_db.findIndex(p => p.id == id);

    if(!deletedProduct) throw new Error("Product not found.");

    await products_db.splice(productIndex, 1);

    return deletedProduct;
}
