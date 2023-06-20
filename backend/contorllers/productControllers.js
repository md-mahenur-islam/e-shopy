import Product from "../models/product";


export const newProduct = async (request, response, next) => {

    const product = await Product.create(request.body)
    response.status(200).json({
        product,
    });
}