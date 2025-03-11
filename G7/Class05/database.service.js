import fs from "fs";

// named export 
export const retrieveProducts = () => {
    const products = fs.readFileSync('./database/products.json', "utf8");

    return JSON.parse(products);
};

// named export
export const createProduct = (newProduct) => {
    // 1. reads all products
    const products = retrieveProducts();
    // 2. add new product to the list
    products.push(newProduct);

    // 3. write back to the products.json all of the products
    fs.writeFileSync('./database/products.json', JSON.stringify(products, null, 2))
}