import * as productsService from "../services/productService.js";


export async function GetAllProductsController(req, res) {
    try {
        const products = await productsService.GetAllProducts();
        return res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ "error":error.message });
    }
}

export async function GetOneProductController(req, res) {
    try {
        const { id } = req.params;
        const product = await productsService.GetOneProduct(id);
        return res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ "error":error.message });
    }
}
