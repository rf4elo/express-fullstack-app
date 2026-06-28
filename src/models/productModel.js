import { products_db } from "../config/database.js";


export class ProductModel {
    constructor(name, description, price) {
        this.id = products_db.sort((a, b) => b.id - a.id)[0].id+1;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
