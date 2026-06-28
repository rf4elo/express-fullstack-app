import { Router } from "express";
import { ValidateProducts } from "../middleware/validateProducts.js";
import * as productController from "../controllers/productsController.js";


const productRoutes = Router();


productRoutes.get('/users', productController.GetAllProductsController );
productRoutes.get('/users/:id', productController.GetOneProductController );


export default productRoutes;
