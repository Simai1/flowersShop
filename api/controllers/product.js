import {AppErrorAlreadyExists, AppErrorMissing} from "../utils/errors.js";
import Product from "../models/product.js";

export default {
    async get(req, res) {
        const products = await Product.findAll();
        res.json({products});
    },

    async create({body: {name, descr, price, img}}, res) {
        if (!name) throw new AppErrorMissing('name');
        if (!descr) throw new AppErrorMissing('descr');
        if (!price) throw new AppErrorMissing('price');
        if (!img) throw new AppErrorMissing('img');

        const checkProduct = await Product.findOne({ where: {name: name} });
        if (checkProduct) throw new AppErrorAlreadyExists('Product');

        const product = await Product.create({
            name: name,
            description: descr,
            price: price,
            img_url: img
        })

        res.json({product});
    },
}