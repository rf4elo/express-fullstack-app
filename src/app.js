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

// USERS ROUTES
app.get('/users', async (req, res) => {

    const response = await fetch("http://localhost:80/api/users", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const users = await response.json();

    const pageData = {
        "title":"Users",
        "users": await users.sort((a, b) => a.id - b.id)
    }

    res.render('../views/pages/users.ejs', pageData);

});
app.get('/users/:id', async (req, res) => {
    const { id } = await req.params;

    const response = await fetch(`http://localhost/api/users/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();

    const pageData = {
        "title":data.name,
        "user":data
    };

    res.render('../views/pages/user.ejs', pageData);

});


// PRODUCTS ROUTES
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

    // ORDENAR ITEMS EM ORDEM CRESCENTE DE ID

    res.render('../views/pages/products.ejs', pageData);

});

export default app;



// TERMINAR DE FAZER AS ROTAS RESTANTES DE API, CONECTAR COM BANCO DE DADOS E UTILIZAR PROXY PARA VERIFICAR ADMIN E CLIENT
// PARA AS ROTAS "users" TERMINAR DE FAZER TODAS AS ROTAS, SIGN-IN E SIGN-OUT E O PROXY BASEADO NO LOGIN
