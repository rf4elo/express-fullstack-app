import { Router } from "express";
import * as UsersController from "../controllers/usersController.js";
import { ValidateUsers } from "../middleware/validateUsers.js";


const usersRoutes = Router();

usersRoutes.get('/users', UsersController.GetAllUsersController );
usersRoutes.get('/users/:id', UsersController.GetOneUserController);
usersRoutes.post('/users', ValidateUsers, UsersController.CreateUserController);

export default usersRoutes;
