import e from "express";
import path from "path";
import productRoutes from "./routes/productRoutes";


const app = e();


// FRONT END SETTINGS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(e.static(path.join(__dirname, 'public')));


// BACKEND MIDDLEWARES
app.use(e.urlencoded({ extended: true }));
app.use(e.json());


// APPLICATION ROUTES
app.use('/api', productRoutes);


export default app;



// TERMINAR DE FAZER AS ROTAS RESTANTES DE API, CONECTAR COM BANCO DE DADOS E UTILIZAR PROXY PARA VERIFICAR ADMIN E CLIENT