import { users_db } from "../config/database.js";

const thisUsers = users_db;

export class UserModel {
    constructor(name, email, password) {
        this.id = thisUsers.sort((a, b) => b.id - a.id)[0].id + 1;
        this.name = name;
        this.email = email;
        this.role = "INTERN";
        this.password = password;
    };
}

