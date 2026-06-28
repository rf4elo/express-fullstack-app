import { Router } from "express";
import { ValidateProducts } from "../middleware/validateProducts.js";
import * as productController from "../controllers/productsController.js";


const productRoutes = Router();


productRoutes.get('/products', productController.GetAllProductsController );
productRoutes.get('/products/:id', productController.GetOneProductController );


export default productRoutes;
