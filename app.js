import e from "express";
import path from "path";
import productRoutes from "./src/routes/productRoutes";


const app = e();


// FRONT END SETTINGS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(e.static(path.join(__dirname, 'public')));


// BACKEND MIDDLEWARES
app.use(e.urlencoded({ extended: true }));
app.use(e.json());


// APPLICATION ROUTES
app.use('/', produtoRoutes);


export default app;

