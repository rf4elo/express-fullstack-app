import * as usersServices from "../services/usersService.js";
import { UserModel } from "../models/userModel.js";
import { Hash } from "../utils/hash.js";


export async function GetAllUsersController(req, res) {
    try {
        const users = await usersServices.GetAllUsers();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ "error":error.message });
    }
}

export async function GetOneUserController(req, res) {
    try {
        const { id } = req.params;
        const user = await usersServices.GetOneUser(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json({ "error":error.message });
    }
}

export async function CreateUserController(req, res) {
    try {
        const { name, email, password } = req.body;

        const securePassword = await Hash(password);
        const userModel = new UserModel(name, email, securePassword);

        const CreateUserRes = await usersServices.CreateUser(userModel);
        res.status(200).json({ "message":"User created successfull.", "user":CreateUserRes });
    } catch (error) {
        return res.status(400).json({ "error":error.message });
    }
}

export async function UpdateUserController(req, res) {
    try {
        const { id } = await req.params;

        const updatedUser = await usersServices.UpdateUser(id, await req.body);
        return res.status(200).json({ "message":"User updated successfully.", "user":updatedUser });
    } catch (error) {
        if(error.message == "User not found.") return res.status(404).json({ "error":error.message });
        return res.status(400).json({ "error":error.message });
    }
};

export async function DeleteUserController(req, res) {
    try {
        const { id } = await req.params;
        
        const deletedUser = await usersServices.DeleteUser(id);
        return res.status(200).json({ "message":"User deleted successfully." });
    } catch (error) {
        return res.status(404).json({ "error":error.message });
    }
};
