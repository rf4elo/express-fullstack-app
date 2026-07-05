import { UserModel } from "../models/userModel.js";
import { users_db } from "../config/database.js";


export async function GetAllUsers() {
    return users_db.sort((a, b) => a.id - b.id);
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

export async function UpdateUser(id, updatedUser) {
    const userIndex = await users_db.findIndex(u => u.id == id);

    if(userIndex == -1) throw new Error("User not found.");

    if(!updatedUser) throw new Error("Invalid user model.");

    users_db[userIndex] = {
        ...users_db[userIndex],
        ...updatedUser
    };

    return users_db[userIndex];
};

export async function DeleteUser(id) {
    const deletedUser = await users_db.find(u => u.id == id);
    const userIndex = await users_db.findIndex(u => u.id == id);

    if(!deletedUser) throw new Error("User not found");

    await users_db.splice(userIndex, 1);

    return deletedUser;
};
