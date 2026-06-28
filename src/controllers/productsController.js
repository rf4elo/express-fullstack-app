import * as productsService from "../services/productService.js";


export async function GetAllProductsController(req, res) {
    try {
        const users = productsService.GetAllProducts();
        if(!users) return res.status(204).json([]);
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ "error":error.message });
    }
}

export async function GetOneProductController(req, res) {
    try {
        const { id } = req.params;
        const user = productsService.GetOneProduct(id);
        if(!user) return res.status(204).json([]);
        return res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ "error":error.message });
    }
}
