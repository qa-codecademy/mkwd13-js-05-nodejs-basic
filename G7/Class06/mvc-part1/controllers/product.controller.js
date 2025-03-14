import ProductModel from "../models/product.model.js";

class ProductController {
    constructor() {
        // new instance from the ProductModel class
        this.productModel = new ProductModel()
    }
    // #2. The controller consumes the request and calls coresponding method from the model
    async getProducts(request, response) {
        console.log("#2. The controller consumes the request and calls coresponding method from the model")

        const products = await this.productModel.listProducts();
        console.log("#4. The result returned from the model, is consumed in the controller")
        // #4. The result returned from the model, is consumed in the controller

        console.log("#5. Return the result back")
        // #5. Return the result back   
        response.send(products);
    }

    async getProduct(request, response) {
        const id = request.params.id;
        const product = await this.productModel.listById(id);
        response.send(product)
    }
}

export default ProductController