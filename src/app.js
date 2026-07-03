import e from "express";
import path from "path";
import productRoutes from "./routes/productRoutes.js";
import usersRoutes from "./routes/userRoutes.js";
import { fileURLToPath } from "url";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = e();

// FRONT END SETTINGS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(e.static(path.join('../', 'public')));


// BACKEND MIDDLEWARES
app.use(e.urlencoded({ extended: true }));
app.use(e.json());


// ROUTES 

// PRODUCT ROUTES
app.use('/api', productRoutes);

// USERS ROUTES
app.use('/api', usersRoutes);

// '/' GET ROUTE
app.get('/', (req, res) => {
    res.status(200).json({ "message":"This app is backend" });
});

export default app;



// TERMINAR DE FAZER AS ROTAS RESTANTES DE API, CONECTAR COM BANCO DE DADOS E UTILIZAR PROXY PARA VERIFICAR ADMIN E CLIENT
// PARA AS ROTAS "users" TERMINAR DE FAZER TODAS AS ROTAS, SIGN-IN E SIGN-OUT E O PROXY BASEADO NO LOGIN
