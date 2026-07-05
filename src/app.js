import e from "express";
import path from "path";
import { fileURLToPath } from "url";

import productRoutes from "./routes/productRoutes.js";
import usersRoutes from "./routes/userRoutes.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = e();

// FRONT END SETTINGS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(e.static(path.join(__dirname, '../public')));


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
    
    res.render('../views/index.ejs')

});

app.get('/users', async (req, res) => {

    const response = await fetch("http://localhost:80/api/users", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const users = await response.json();

    res.render('../views/pages/users.ejs', users);

});

app.get('/products', async (req, res) => {

    const response = await fetch('http://localhost/api/products', {
        method: "GET",
        headers: {
            'Content-Type':'application/json'
        }
    });

    const products = await response.json();

    const pageData = {
        "title": "Products",
        "products": products,
    };

    res.render('../views/pages/products.ejs', pageData);

});

export default app;



// TERMINAR DE FAZER AS ROTAS RESTANTES DE API, CONECTAR COM BANCO DE DADOS E UTILIZAR PROXY PARA VERIFICAR ADMIN E CLIENT
// PARA AS ROTAS "users" TERMINAR DE FAZER TODAS AS ROTAS, SIGN-IN E SIGN-OUT E O PROXY BASEADO NO LOGIN
