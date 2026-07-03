import { Router } from "express";
import { ValidateProducts } from "../middleware/validateProducts.js";
import * as productController from "../controllers/productsController.js";


const productRoutes = Router();


productRoutes.get('/products', productController.GetAllProductsController );
productRoutes.get('/products/:id', productController.GetOneProductController );
productRoutes.post('/products', ValidateProducts, productController.CreateProductController );
productRoutes.patch('/products/:id', productController.UpdateProductController );
productRoutes.delete('/products/:id', productController.DeletedProductController );

export default productRoutes;
