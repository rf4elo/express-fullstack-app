import * as bcrypt from "bcrypt";


export async function Hash(text) {

    const saltRounds = 12;

    const HashText = await bcrypt.hash(text, saltRounds);

    return HashText;
}

export async function CompareHash(password, HashPassword) {

    const isMatch = await bcrypt.compare(password, HashPassword);

    if(isMatch) return { "message":"The password is match." };
    return { "message":"The password don't match." };

}
