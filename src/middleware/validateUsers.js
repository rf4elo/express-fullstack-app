import { users_db } from "../config/database.js";


export async function ValidateUsers(req, res, next) {
    
    const { name, email, password } = req.body;

    if(!name | !email | !password) return res.status(400).json({ "message":"The fields must be filled." });

    const userExists = await users_db.find(user => user.email == email);
    
    if(userExists) return res.status(409).json({ "message":"The email is already in use." });

    next();
    
}

