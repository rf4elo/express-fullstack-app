import { Router } from "express";
import * as UsersController from "../controllers/usersController.js";
import { ValidateUsers } from "../middleware/validateUsers.js";
import { users_db } from "../config/database.js";


const usersRoutes = Router();

usersRoutes.get('/users', UsersController.GetAllUsersController );
usersRoutes.get('/users/:id', UsersController.GetOneUserController);
usersRoutes.post('/users', ValidateUsers, UsersController.CreateUserController);
usersRoutes.patch('/users/:id', UsersController.UpdateUserController );
usersRoutes.delete('/users/:id', UsersController.DeleteUserController );

export default usersRoutes;
