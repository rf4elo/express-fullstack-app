import * as bcrypt from "bcrypt";


export async function HashPassword(password) {

    const saltRounds = 12;

    const HashPassword = await bcrypt.hash(password, saltRounds);

    return HashPassword;

}

export async function CompareHash(password, HashPassword) {

    const isMatch = await bcrypt.compare(password, HashPassword);

    if(isMatch) return { "message":"The password is match." };
    return { "message":"The password don't match." };

}
