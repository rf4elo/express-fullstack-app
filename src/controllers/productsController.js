import * as productsService from "../services/productService.js";
import { ProductModel } from "../models/productModel.js";


export async function GetAllProductsController(req, res) {
    try {
        const products = await productsService.GetAllProducts();
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ "error":error.message });
    }
}

export async function GetOneProductController(req, res) {
    try {
        const { id } = req.params;
        const product = await productsService.GetOneProduct(id);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(404).json({ "error":error.message });
    }
}

export async function CreateProductController(req, res) {
    try {
        const { name, description, price } = await req.body;
        const productModel = new ProductModel(name, description, price);
        const product = await productsService.CreateProduct(productModel);
        return res.status(200).json({ "message":"Product register successfull", "product":product });
    } catch (error) {
        return res.status(400).json({ "error":error.message });
    }
}
