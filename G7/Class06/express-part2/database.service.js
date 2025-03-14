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

export const removeById = (id) => {
    const products = retrieveProducts();

    const isExisting = products.find((product) => product.id === id);
    console.log(isExisting)
 
    // we threw an error if the product does not exists
    if(!isExisting){
        throw new Error(`Product with id:${id} is not existing`);
    };

    const remainingProducts = products.filter((product) => {
        return product.id !== id;
    });
    fs.writeFileSync('./database/products.json', JSON.stringify(remainingProducts, null, 2))
}


export const updateProductById = (id, newProductValues) => {
    const products = retrieveProducts();

    const newValues = products.map((product) => {
        // this is the product that we want to update
        if(product.id === id){
            return {
                id: product.id,
                name: newProductValues.name || product.name, // if new value for name is not provided, the older one is taken into account. NOTE: IT applies for all the rest.
                color: newProductValues.color || product.color,
                size: newProductValues.size || product.size,
                material: newProductValues.material || product.material,
                price: newProductValues.price || product.price
            }

            // Using spread
            // return {
            //     ...product,
            //     ...newProductValues
            // }
        }
        return product
    });

    fs.writeFileSync('./database/products.json', JSON.stringify(newValues, null, 2))
}