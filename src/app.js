import e from "express";
import path from "path";
import productRoutes from "./routes/productRoutes.js";
import usersRoutes from "./routes/userRoutes.js";


const app = e();


// FRONT END SETTINGS
app.set('view engine', 'ejs');
app.set('views', path.join('../', 'views'));
app.use(e.static(path.join('../', 'public')));


// BACKEND MIDDLEWARES
app.use(e.urlencoded({ extended: true }));
app.use(e.json());


// ROUTES 

// PRODUCT ROUTES
app.use('/api', productRoutes);

// USERS ROUTES
app.use('/api', usersRoutes);



export default app;



// TERMINAR DE FAZER AS ROTAS RESTANTES DE API, CONECTAR COM BANCO DE DADOS E UTILIZAR PROXY PARA VERIFICAR ADMIN E CLIENT
