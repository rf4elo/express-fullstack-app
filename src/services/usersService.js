import { UserModel } from "../models/userModel.js";
import { users_db } from "../config/database.js";


export async function GetAllUsers() {
    return users_db;
}

export async function GetOneUser(id) {
    const user = await users_db.find(user => user.id == id);
    if(!user) throw new Error("User not found.");
    return user;
}

export async function CreateUser(user) {
    const userExists = await users_db.find(findUser => findUser == user);
    if(userExists) throw new Error("This user already exists.");

    users_db.push(user);
    
    return user;
};

