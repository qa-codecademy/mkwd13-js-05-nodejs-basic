import fsPromises from "fs/promises"

class ProductModel {
    async listProducts() {
        // read all products from the products.json
        // #3. The model does some business logic
        console.log("#3. The model does some business logic")
        const products = await fsPromises.readFile('./database/products.json', "utf8");

        console.log("#3.5 And returns result back")
        // #3.5 And returns result back
        return JSON.parse(products);
    }

    async listById(id){
        const products = await fsPromises.readFile('./database/products.json', "utf8");

        const parsedProducts = JSON.parse(products)
        const productFound = parsedProducts.find((product) => product.id === id);

        return productFound
    }
};

export default ProductModel;